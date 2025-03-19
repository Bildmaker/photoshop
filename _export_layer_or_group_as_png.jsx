/*
    =====================================================================
    Export Layer or Group as PNG Script for Photoshop
    =====================================================================
    Author: Sebastian
    Date: 2025-03-19
    =====================================================================
    
    Description:
    This script exports the active document as a PNG using the name of the 
    selected layer or group. The PNG file is saved in the same directory 
    as the original PSD file.

    =====================================================================
    Instructions for Creating a Photoshop Action:
    -----------------------------------------------
    1. Save the Script:
       - Copy this script into a file named "_export_layer_or_group_as_png.jsx"
       - Save the file in the following location:
         - Windows: C:\Program Files\Adobe\Adobe Photoshop [version]\Presets\Scripts
         - Mac: /Applications/Adobe Photoshop [version]/Presets/Scripts

    2. Restart Photoshop:
       - Restart Photoshop so the script is recognized.

    3. Create a New Action:
       - Open Photoshop.
       - Go to **Window > Actions**.
       - Click the **New Action** button at the bottom of the Actions panel.
       - Name the action (e.g., "Export Layer or Group as PNG").
       - Assign a **function key** (e.g., F2 or Shift + F2).
       - Click **Record**.

    4. Run the Script in the Action:
       - Go to **File > Scripts > _export_layer_or_group_as_png**.
       - The script will run and save the file as a PNG.
       - Click **Stop** in the Actions panel to finish recording.

    5. Done!
       - You can now trigger the action using the assigned function key or 
         directly from the Actions panel.

    =====================================================================
*/

// Export PSD as PNG using the selected layer/group name
if (app.documents.length > 0) {
    var doc = app.activeDocument;
    
    // Ensure the document has a file path
    if (doc.fullName) {
        var filePath = doc.fullName.path;
        
        // Get the selected layer or group name
        if (doc.activeLayer != null) {
            var layerName = doc.activeLayer.name.replace(/[\/:*?"<>|]/g, "_"); // Clean invalid filename characters
            
            var pngFile = new File(filePath + "/" + layerName + ".png");
            
            var pngOptions = new PNGSaveOptions();
            pngOptions.interlaced = false;
            
            // Save as PNG
            doc.saveAs(pngFile, pngOptions, true, Extension.LOWERCASE);
            alert("Saved as PNG: " + pngFile.fsName);
        } else {
            alert("Please select a layer or group.");
        }
    } else {
        alert("Please save the document first.");
    }
} else {
    alert("No document is open.");
}
