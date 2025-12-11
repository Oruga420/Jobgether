'use client';

export default function DownloadButton() {
  const handleDownload = async () => {
    if (typeof window === 'undefined') return;
    
    // We can use the simple window.print() for best fidelity if the user has "Save as PDF" printer
    // However, to force a download file we typically use html2pdf or similar.
    // Given the request "printed as a pdf and downloaded", a button triggering print is often accepted as "Download as PDF" in modern web, 
    // but let's try to use html2pdf.js for a direct download experience if possible. 
    // Actually, `window.print()` is the most robust way to start. 
    // But the instructions specifically say "downloaded".
    
    // Let's use html2pdf.js
    const html2pdf = (await import('html2pdf.js')).default;
    const element = document.getElementById('resume-content');
    const opt = {
      margin:       [10, 10, 10, 10], // top, left, bottom, right
      filename:     'Alejandro_De_La_Mora_Resume.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <button className="download-btn" onClick={handleDownload} title="Download as PDF">
      Download PDF
    </button>
  );
}
