
////////////////////////////////////////////////////////////////////////////////
// bresenham.js
//
// Bearbeiten Sie diese Datei für den Praktikumsteil "Bresenham Line".
//
// HS Duesseldorf - Fachbereich Medien - Grundlagen d. Computergrafik
//
// Studiengang: BMT / BMI
// Gruppe     : BK
// Autor 1    : Luis Rodriguez Hofheinz
// Autor 2    : Anna Lövenich
// Autor 3    : Mirai Schröder
// Autor 4    : Robert Dörnmann
// Autor 5    : Lucas Jünger
////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////
// drawLine(x0, y0, x1, y1)
// Diese Funktion soll eine Linie von (x0, y0) nach (x1, y1) zeichnen.
// Implementieren Sie dazu den Bresenham-Line-Algorithmus für alle Oktanten
// in dieser Funktion. Einen Punkt zeichnen Sie mit setPixel(x,y).
////////////////////////////////////////////////////////////////////////////////


function drawLine(_x0, _y0, _x1, _y1){

  let x0 = _x0;
  let y0 = _y0;
  let x1 = _x1;
  let y1 = _y1;

  let dx = x1-x0;       //delta x
  let dy = y1-y0;       //delta y

  let m = dy / dx;    //Steigung


  //Vorberechnungen für x

  // Standard: Linie nach rechts, (dx>0)
  let x_start = x0;
  let x_end = x1+1; // damit bei x!=x_end keine Lücke entsteht
  let x_step = 1;


  // Wenn Linie nach links, (dx<0)
  if (dx<0) {
      x_step = -1;    // wir wollen x dekrementieren um nach links zu laufen
      x_end = x1-1;   // damit bei x!=x_end keine Lücke entsteht
      dx = -dx;       // hiermit spiegeln wir an der y-Achse
  }


  //Vorberechnungen für y
  let y = y0;        


  let y_step = 1;       

  if (dy<0) {
      y_step = -1;
      dy = -dy;       // spiegelung an der x-Achse       
  }

  let Q = 2*dy-dx;
  let Q_step = 2*(dy-dx);
  let Q_equal = 2*dy;

    let x;
  if (m<1){
    let temp = x;
    x = y;
    y = temp
  }
  // x_start: startpunkt; 
  // x!=x_end: wir machen so lange weiter, wie das aktuelle x ungleich x_end ist; 
  // x_step: entscheidet über Inkrement oder Dekrement.
  for (x=x_start; x!=x_end; x=x+x_step) {
      setPixel(x, y);
      if (Q < 0){
          Q=Q+Q_equal;

      } else {
          Q=Q+Q_step;
          y=y+y_step;
      }
  }

}