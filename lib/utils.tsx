const getStatusDiv = () => {
  let statusDiv = document.getElementById("a11y-status-message");
  if (statusDiv) {
    return statusDiv;
  }

  statusDiv = document.createElement("div");
  statusDiv.setAttribute("id", "a11y-status-message");
  statusDiv.setAttribute("role", "status");
  statusDiv.setAttribute("aria-live", "polite");
  statusDiv.setAttribute("aria-relevant", "additions text");
  Object.assign(statusDiv.style, {
    border: "0",
    clip: "rect(0 0 0 0)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: "0",
    position: "absolute",
    width: "1px",
  });
  document.body.appendChild(statusDiv);

  return statusDiv;
};

const updateStatus = (value: number, label: string) => {
  const statusDiv = getStatusDiv();
  statusDiv.innerHTML = `${label}: ${value}%`;
};

export { updateStatus };
