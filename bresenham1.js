
////////////////////////////////////////////////////////////////////////////////
// bresenham.js
//
// Bearbeiten Sie diese Datei für den Praktikumsteil "Bresenham Line".
//
// HS Duesseldorf - Fachbereich Medien - Grundlagen d. Computergrafik
//
// Studiengang: BMT / BMI
// Gruppe     : BK
// Autor 1    :Luis Rodriguez Hofheinz
// Autor 2    :Anna Lövenich
// Autor 3    :Mirai Schröder
// Autor 4    :Robert Dörnmann
// Autor 5    :Lucas Jünger
////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////
// drawLine(x0, y0, x1, y1)
// Diese Funktion soll eine Linie von (x0, y0) nach (x1, y1) zeichnen.
// Implementieren Sie dazu den Bresenham-Line-Algorithmus für alle Oktanten
// in dieser Funktion. Einen Punkt zeichnen Sie mit setPixel(x,y).
////////////////////////////////////////////////////////////////////////////////


function drawLine(x0, y0, x1, y1){
    let y = y0;        
    let a = y1-y0;      //delta y
    let b = -(x1-x0);   //- delta x
    let Q = 2*a+b;
    let Q_step = 2*(a+b);
    let Q_equal = 2*a;

    for (let x=x0; x<=x1; x++)
    {
        setPixel(x, y);
        if (Q < 0){
            Q=Q+Q_equal;
        } else {
            Q=Q+Q_step;
            y++;
        }
    }

}

