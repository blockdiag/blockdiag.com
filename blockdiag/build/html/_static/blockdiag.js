var __last = null;

function update_diagram() {
  diagram = $('#diagram').val();
  if (diagram == null || diagram.length == 0) return;
  if (__last == diagram) return; 
  __last = diagram;

  url = 'http://blockdiag.appspot.com/image?callback=?';
  params = {'src': diagram, 'encoding': 'jsonp'};
  $.ajax({
    url: url,
    dataType: "jsonp",
    data: params,
    success: function(json) {
      if (json['image']) {
        re = RegExp('viewBox="\\d+\\s+\\d+\\s+(\\d+)\\s+(\\d+)\\s*"');
        m = re(json['image'])
        if (m) {
            width = m[1]
            height = m[2]
        } else {
            width = 400
            height = 400
        }

        encoded_diagram = Base64.encodeURI(diagram)
        url = 'http://blockdiag.appspot.com/image?encoding=base64&src=' + encoded_diagram
        html = '<object type="image/svg+xml" data="' + url + '" width="' + width + '" height="' + height + '" />'
        $('#diagram_image').html(html);
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
