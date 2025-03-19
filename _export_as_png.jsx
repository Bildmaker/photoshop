/*
    =====================================================================
    Save As PNG Script for Photoshop
    =====================================================================
    Author: Sebastian
    Date: 2025-03-14
    =====================================================================
    
    Description:
    This script saves the active document as a PNG with the same filename 
    and in the same directory as the original file.

    =====================================================================
    Instructions for Creating a Photoshop Action:
    -----------------------------------------------
    1. Save the Script:
       - Copy this script into a file named "SaveAsPNG.jsx"
       - Save the file in the following location:
         - Windows: C:\Program Files\Adobe\Adobe Photoshop [version]\Presets\Scripts
         - Mac: /Applications/Adobe Photoshop [version]/Presets/Scripts

    2. Restart Photoshop:
       - Restart Photoshop so the script is recognized.

    3. Create a New Action:
       - Open Photoshop.
       - Go to **Window > Actions**.
       - Click the **New Action** button at the bottom of the Actions panel.
       - Name the action (e.g., "Save as PNG").
       - Assign a **function key** (e.g., F2 or Shift + F2).
       - Click **Record**.

    4. Run the Script in the Action:
       - Go to **File > Scripts > SaveAsPNG** (or the name you used).
       - The script will run and save the file as a PNG.
       - Click **Stop** in the Actions panel to finish recording.

    5. Done!
       - You can now trigger the action using the assigned function key or 
         directly from the Actions panel.

    =====================================================================
*/



// Save the active document as a PNG with the same filename and directory
if (app.documents.length > 0) {
    var doc = app.activeDocument;
    
    // Ensure the document has a file path
    if (doc.fullName) {
        var filePath = doc.fullName.path; // Get the directory path
        var fileName = doc.fullName.name.replace(/\.[^\.]+$/, ''); // Remove the extension
        var pngFile = new File(filePath + "/" + fileName + ".png");

        var pngOptions = new PNGSaveOptions();
        pngOptions.interlaced = false; // No interlacing
        
        // Save as PNG
        doc.saveAs(pngFile, pngOptions, true, Extension.LOWERCASE);
        alert("Saved as PNG: " + pngFile.fsName);
    } else {
        alert("Please save the document first.");
    }
} else {
    alert("No document is open.");
}
