(function () {

  const popup = document.createElement("div");

  popup.style.position = "fixed";
  popup.style.top = "50%";
  popup.style.left = "50%";
  popup.style.transform = "translate(-50%, -50%)";
  popup.style.background = "#ffffff";
  popup.style.padding = "24px";
  popup.style.borderRadius = "12px";
  popup.style.boxShadow = "0 8px 24px rgba(0,0,0,0.25)";
  popup.style.zIndex = "999999";
  popup.style.width = "600px";
  popup.style.fontFamily = "Arial";

  popup.innerHTML = `
    <h2>Meet Joule</h2>

    <p>
      SAP Business AI for SuccessFactors
    </p>

    <img
      src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
      width="100%"
      style="border-radius:8px;"
    >

    <br><br>

    <button id="watchVideo">
      Watch AI Demo
    </button>

    <button id="closePopup" style="margin-left:10px;">
      Close
    </button>
  `;

  document.body.appendChild(popup);

  document.getElementById("watchVideo").onclick = function () {
      window.open(
        "https://www.youtube.com/watch?v=4kAz1HkZmY4",
        "_blank"
      );
  };

  document.getElementById("closePopup").onclick = function () {
      popup.remove();
  };

})();
