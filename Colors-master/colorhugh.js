//Declare the Color Object with our new keyword below here.
const Color = new Object();

/*
** rgb is an array that hold the color values.
** first is red -> R, then green -> G, and blue -> B
** Example
*/

Color.isColor = function(rgb){
  //each color must be between 0 and 255. Also can be equal.

  let redworks = (rgb[0] >= 0) && (rgb[0] <= 255);
  let greenworks = (rgb[1] >= 0) && (rgb[1] <= 255);
  let blueworks = (rgb[2] >= 0) && (rgb[2] <= 255);

  if(redworks && greenworks && blueworks){
    return true;
  }
  else{
    return false;
  }
};

Color.redIntensity = function(rgb){
let r = (rgb0[0]/255*100);
r = Math.Round(r);
return r;
};

//greenIntensity
Color.greenIntensity = function(rgb){
  let g = (rgb0[1]/255*100);
  g = Math.Round(g);
  return g;
//blueIntensity
Color.blueIntensity = function(rgb){
  let b = (rgb0[2]/255*100);
  b = Math.Round(b);
  return b;
//brightness
Color.brghtness = function(rgb){
  let bright = (Color.redIntensity(rgb)+Color.greenIntensity(rgb)+Color.blueIntensity(rgb)\3);
  bright = Math.Round(bright);
  return bright;
};
//complement
let comp = 
