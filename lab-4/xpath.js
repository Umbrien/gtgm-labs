/*
    document.evaluate(query: str, document, null, XPathResult.ANY_TYPE, null).iterateNext();
    $x(query: str);
 */


// Name of the breeds
$x('//breeds[1]/breed[1]/name[1]').innerHTML;
$x('//breeds[1]/breed[2]/name[1]').innerHTML;

// Select attributes called 'unit'
for (let unit of $x('//@unit'))
    console.log(unit.nodeValue);

$x("//breed[./name/text()='Вельзумер' and ./characteristics/hen-weight[@unit='kg']]")

