const downloadWeddingICSFile = () => {
  const title = "Undangan Pernikahan";
  const description =
    "Dengan hormat, Anda diundang untuk menghadiri acara pernikahan kami.";
  const location = "Gedung Serbaguna Cinta Abadi, Jakarta";

  // Acara: 20 Juli 2025, jam 10:00 - 12:00 WIB (WIB = UTC+7)
  const startDate = new Date(Date.UTC(2025, 6, 20, 3, 0)); // bulan ke-6 = Juli (index 0)
  const endDate = new Date(Date.UTC(2025, 6, 20, 5, 0));

  const pad = (num) => (num < 10 ? "0" + num : num);
  const formatDate = (date) => {
    return (
      date.getUTCFullYear().toString() +
      pad(date.getUTCMonth() + 1) +
      pad(date.getUTCDate()) +
      "T" +
      pad(date.getUTCHours()) +
      pad(date.getUTCMinutes()) +
      pad(date.getUTCSeconds()) +
      "Z"
    );
  };

  const icsContent = `
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${title}
DESCRIPTION:${description}
LOCATION:${location}
DTSTART:${formatDate(startDate)}
DTEND:${formatDate(endDate)}
END:VEVENT
END:VCALENDAR`.trim();

  const blob = new Blob([icsContent], { type: "text/calendar" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "undangan-pernikahan.ics";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
