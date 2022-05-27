export const resizeColumns = () => {
  const table = document.getElementById("table");

  // Query all headers
  const cols = table.querySelectorAll("tr");

  const createResizableColumn = function (col, resizer) {
    // Track the current position of mouse
    let x = 0;
    let w = 0;

    const mouseDownHandler = function (e) {
      // Get the current mouse position
      x = e.clientX;

      // Calculate the current width of column
      const styles = window.getComputedStyle(col);
      w = parseInt(styles.width, 10);

      // Attach listeners for document's events
      document.addEventListener("mousemove", mouseMoveHandler);
      document.addEventListener("mouseup", mouseUpHandler);
    };

    const mouseMoveHandler = function (e) {
      // Determine how far the mouse has been moved
      const dx = e.clientX - x;

      // Update the width of column
      col.style.width = `${w + dx}px`;
    };

    // When user releases the mouse, remove the existing event listeners
    const mouseUpHandler = function () {
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mouseup", mouseUpHandler);
    };

    resizer.addEventListener("mousedown", mouseDownHandler);
  };

  // Loop over them

  [].forEach.call(cols, function (col) {
    // Create a resizer element
    const resizer = document.createElement("div");
    resizer.classList.add("resizer");

    // Set the height
    resizer.style.height = `${table.offsetHeight}px`;

    // Add a resizer element to the column
    col.appendChild(resizer);

    // Will be implemented in the next section
    createResizableColumn(col, resizer);
  });
};
