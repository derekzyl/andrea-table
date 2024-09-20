export const handleCopyToClipboard = (
  value: string,
  callback: (success: boolean) => void
) => {
  const textToCopy = value;

  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        callback(true); // Notify success to the callback
        // toast.success("Copied successfully to clipboard");

        const v = setTimeout(() => {
          callback(false);
        }, 2000);
        return () => clearTimeout(v);
      })
      .catch(() => {
        fallbackCopyToClipboard(textToCopy, callback);
      });
  } else {
    fallbackCopyToClipboard(textToCopy, callback);
  }
};

const fallbackCopyToClipboard = (
  text: string,
  callback: (success: boolean) => void
) => {
  const textArea = document.createElement("textarea");
  textArea.value = text;

  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    const successful = document.execCommand("copy");
    callback(successful);
    if (successful) {
      // toast.success("Copied successfully to clipboard");
    } else {
      // toast.error("Failed to copy to clipboard");
    }
  } catch (err) {
    callback(false);
    // toast.error("Failed to copy to clipboard");
  }

  document.body.removeChild(textArea);

  const v = setTimeout(() => {
    callback(false);
  }, 2000);
  return () => clearTimeout(v);
};
