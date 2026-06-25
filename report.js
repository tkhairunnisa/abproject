(function () {

  // Overlay
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.background = "rgba(0,0,0,0.5)";
  overlay.style.zIndex = "999998";

  // Popup
  const popup = document.createElement("div");
  popup.style.position = "fixed";
  popup.style.top = "50%";
  popup.style.left = "50%";
  popup.style.transform = "translate(-50%, -50%)";
  popup.style.width = "90%";
  popup.style.maxWidth = "1200px";
  popup.style.height = "80%";
  popup.style.background = "#fff";
  popup.style.borderRadius = "12px";
  popup.style.boxShadow = "0 8px 24px rgba(0,0,0,.3)";
  popup.style.zIndex = "999999";
  popup.style.display = "flex";
  popup.style.flexDirection = "column";
  popup.style.overflow = "hidden";

  popup.innerHTML = `
    <div style="
      background:#0a6ed1;
      color:white;
      padding:16px 20px;
      display:flex;
      justify-content:space-between;
      align-items:center;
      font-family:Arial,sans-serif;
    ">
      <span style="font-size:18px;font-weight:bold;">
        Performance Percentage Report
      </span>

      <button id="closeReport"
        style="
          background:white;
          color:#0a6ed1;
          border:none;
          border-radius:4px;
          padding:6px 12px;
          cursor:pointer;
        ">
        ✕ Close
      </button>
    </div>

    <iframe
      src="https://pmsalesdemo8.successfactors.com/sf/reportcenterexecute?reportId=77C39F154AEDAB4735BD193668324CA7&reportName=ABID_Performance%20Percentage%20Report&module=SAC&bplte_company=SFCPART000393"
      style="
        width:100%;
        height:100%;
        border:none;
        flex:1;
      ">
    </iframe>
  `;

  document.body.appendChild(overlay);
  document.body.appendChild(popup);

  document.getElementById("closeReport").onclick = function () {
    popup.remove();
    overlay.remove();
  };

})();
