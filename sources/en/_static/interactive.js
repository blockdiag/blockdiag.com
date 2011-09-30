var __last = null;

function basename(path) {
  return path.replace(/\\/g,'/').replace( /.*\//, '' );
}
 
function dirname(path) {
  return path.replace(/\\/g,'/').replace(/\/[^\/]*$/, '');
}

function update_diagram() {
  diagram = $('#diagram').val();
  if (diagram == null || diagram.length == 0) return;
  if (__last == diagram) return; 
  __last = diagram;

  diagname = basename(dirname(document.URL)) + '/';
  url = 'http://interactive.blockdiag.com/' + diagname + 'image?callback=?';
  params = {'encoding': 'jsonp', 'src': diagram};
  $.ajax({
    url: url,
    dataType: "jsonp",
    data: params,
    success: function(json) {
      if (json['image']) {
        re = RegExp('viewBox="\\d+\\s+\\d+\\s+(\\d+)\\s+(\\d+)\\s*"');
        m = json['image'].match(re)
        if (m) {
            width = m[1]
            height = m[2]
        } else {
            width = 400
            height = 400
        }


        is_webkit = !document.uniqueID && !window.opera && !window.globalStorage && window.localStorage
        if (!is_webkit && jQuery.support.noCloneEvent && !window.globalStorage){
          encoded_diagram = Base64.encodeURI(diagram)
          url = 'http://interactive.blockdiag.com/' + diagname + 'image?encoding=base64&src=' + encoded_diagram
          var obj = $(document.createElement('object'))
          obj.attr('type', 'image/svg+xml')
          obj.attr('data', url)
          obj.attr('width', width)
          obj.attr('height', height)
          $('#diagram_image').html(obj);
        } else {
          html = json['image'].replace(/<\?xml.*>\n/, '')
          html = html.replace(/<!DOCTYPE.*>\n/, '')

          $('#diagram_image').html(html);
          if (is_webkit) {
            // for Chrome and Safari
            $('#diagram_image svg').removeAttr('viewBox');
            $('#diagram_image svg').width(width);
            $('#diagram_image svg').height(height);
          }
        }
      }
    }
  });
}

$(document).ready(function($){
  diagram = $('#diagram');
  diagram.timer = null;

  diagram.bind('keyup change', function(){
    if (diagram.timer)  clearTimeout(diagram.timer);

    diagram.timer = setTimeout(update_diagram, 500);
  });

  update_diagram();
});
