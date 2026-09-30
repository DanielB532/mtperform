// Shared enquiry submission config.
// ENQUIRY_EMAIL: where email submissions land. Swap for the MTP address later.
export const ENQUIRY_EMAIL = "danielboadu03@gmail.com";
export const WHATSAPP_NUMBER = "447508855696";

export type EnquiryFields = Record<string, string>;

export const buildLines = (fields: EnquiryFields): string =>
  Object.entries(fields)
    .filter(([, v]) => v && v.trim() !== "")
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");

export const openWhatsApp = (title: string, fields: EnquiryFields) => {
  const text = encodeURIComponent(`*${title}*\n\n${buildLines(fields)}`);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
};

export const sendEnquiryEmail = async (
  subject: string,
  fields: EnquiryFields
): Promise<boolean> => {
  try {
    const res = await fetch(`https://formsubmit.co/ajax/${ENQUIRY_EMAIL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ _subject: subject, ...fields }),
    });
    return res.ok;
  } catch {
    return false;
  }
};
