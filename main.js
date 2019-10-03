var TEXT_FILE_PATH = 'whuteva.txt';

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                document.getElementById("textFile").innerHTML = allText;
                //alert(allText);
            }
        }
    }
    rawFile.send(null);
}