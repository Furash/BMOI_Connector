
// BMOI Connector

var MoI_dir = moi.filesystem.getAppDataDir();
var Base_dir = MoI_dir.substr( 0, MoI_dir.length - 13 );
var Bmoi_path = Base_dir + '\\Local\\Temp\\BMOI\\BMOI_TMP_MOI3D.fbx'
	

function Export_to_Blender()
{ 	
	var so = moi.geometryDatabase.getSelectedObjects(); 
	if ( so.length == 0 ) 
	{
		moi.ui.alert("Nothing is selected.");
	}
	else
	{
		bmoi_export_FBX()
		
		function bmoi_export_FBX()
		{
			moi.geometryDatabase.fileExport(Bmoi_path, 'NoUI=False');			
		}
	}
	
}

Export_to_Blender()
	
	
	