var canvas = document.createElement("canvas")
document.body.appendChild(canvas);

var Rasm = null;

Qlb.globalEnvironment.merge({
  "عرض-الرسم":
  function() {
    return Rasm.width;
  },

  "طول-الرسم":
  function() {
    return Rasm.height;
  },

  "س-فأرة":
  function() {
    return Rasm.mouseX;
  },

  "ص-فأرة":
  function() {
    return Rasm.mouseY;
  },

  "ابدأ-رسم":
  function(w, h) {
    Rasm = new Processing(canvas);
    Rasm.size(w, h); 
    Rasm.textFont(Rasm.createFont("Courier New", 32));
    Rasm.textAlign(Rasm.CENTER, Rasm.BOTTOM);
    Rasm.loop();
  },

  "ارسم":
  function(fn) {
    Rasm.draw = fn;
  },

  "طريقة-رسم-مستطيلات":
  function(mode) {
    if(mode == "وسط")
      Rasm.rectMode(Rasm.CENTER);
    else if(mode == "ركن")
      Rasm.rectMode(Rasm.CORNER);
  },

  "طريقة-رسم-مستطيلات":
  function(mode) {
    if(mode == "وسط")
      Rasm.rectMode(Rasm.CENTER);
    else if(mode == "ركن")
      Rasm.rectMode(Rasm.CORNER);
  },

  "مفتاح-مضغوط؟":
  function() {
    return Rasm.__keyPressed;
  },

  "عند-ضغط-مفتاح":
  function(fn) {
    Rasm.keyPressed = fn;
  },

  "رقم-مفتاح-الاخير":
  function() {
    return Rasm.keyCode;
  },

  "خط":
  function(x1, y1, x2, y2) {
    Rasm.line(x1, y1, x2, y2);
  },

  "احرف":
  function(s, x, y) {
    Rasm.text(Qlb.arabize(s), x, y);
  },

  "نقطة":
  function(x, y) {
    Rasm.point(x, y);
  },

  "إهليلج":
  function(x, y, w, h) {
    Rasm.ellipse(x, y, w, h);
  },

  "دائرة":
  function(x, y, r) {
    Rasm.ellipse(x, y, r, r);
  },

  "مستطيل":
  function(x, y, w, h) {
    Rasm.rect(x, y, w, h);
  },

  "مربع":
  function(x, y, s) {
    Rasm.rect(x, y, s, s);
  },

  "ضجة":
  function(x, y, z) {
    return Rasm.noise(x, y, z);
  },

  "تحجيم":
  function(x, y, z) {
    Rasm.scale(x, y, z);
  },

  "انزلاق":
  function(x, y, z) {
    Rasm.translate(x, y, z);
  },

  "دوران":
  function(x, y, z) {
    Rasm.rotate(x, y, z);
  },

  "لون":
  function(r, g, b) {
    Rasm.color(r, g, b);
  },

  "لون-الخطوط":
  function(r, g, b) {
    Rasm.stroke(r, g, b);
  },

  "لا-خطوط":
  function() {
    Rasm.noStroke();
  },

  "خلفية":
  function(r, g, b) {
    Rasm.background(r, g, b);
  }
});