import html2canvas from "html2canvas";
import jsPDF from "jspdf";

/**
 * Export a DOM element to a multi-page A4 PDF and trigger download.
 * - filename: e.g., "Billy_Resume.pdf"
 * - element: the container to capture (should be visible in the DOM)
 */
export async function exportElementToPdf(filename: string, element: HTMLElement) {
  // Ensure element exists
  if (!element) return;

  // Use a higher scale for better quality
  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    backgroundColor: "#ffffff",
    windowWidth: element.scrollWidth,
  });

  const imgData = canvas.toDataURL("image/jpeg", 0.98);

  // A4 size in mm
  const pdf = new jsPDF({ orientation: "p", unit: "mm", format: "a4" });
  const pageWidth = 210; // mm
  const pageHeight = 297; // mm

  // Calculate dimensions to fit width
  const imgWidth = pageWidth;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;

  let heightLeft = imgHeight;
  let position = 0;

  pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight, undefined, "FAST");
  heightLeft -= pageHeight;

  while (heightLeft > 0) {
    position = heightLeft - imgHeight; // negative offset to simulate next slice
    pdf.addPage();
    pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight, undefined, "FAST");
    heightLeft -= pageHeight;
  }

  pdf.save(filename);
}
