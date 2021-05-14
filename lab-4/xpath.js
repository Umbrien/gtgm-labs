/*
    document.evaluate(query: str, document, null, XPathResult.ANY_TYPE, null).iterateNext();
    $x(query: str);
 */


// Name of the breeds
$x('//breeds[1]/breed[1]/name[1]').innerHTML;
document.evaluate('//breeds[1]/breed[1]/name[1]/text()', document, null, XPathResult.ANY_TYPE, null).iterateNext()

$x('//breeds[1]/breed[2]/name[1]').innerHTML;
document.evaluate('//breeds[1]/breed[2]/name[1]/text()', document, null, XPathResult.ANY_TYPE, null).iterateNext()

// Select attributes called 'unit'
for (let unit of $x('//@unit'))
    console.log(unit.nodeValue);

for (let unit of document.evaluate('//@unit', document, null, XPathResult.ANY_TYPE, null).iterateNext())
    console.log(unit.nodeValue);

$x("//breed[./name/text()='Вельзумер' and ./characteristics/hen-weight[@unit='kg']]")
document.evaluate("//breed[./name/text()='Вельзумер' and ./characteristics/hen-weight[@unit='kg']]", document, null, XPathResult.ANY_TYPE, null).iterateNext()
