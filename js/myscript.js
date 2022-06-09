var req = getXmlHttp()
req.open('GET', '/test.html', true)
req.onreadystatechange = function () {
  if (req.readyState == 4) {
    if (req.status == 200) {
      alert(req.responseText)
    }
  }
}
req.send(null)