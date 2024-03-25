import { v2 as cloudinary, UploadApiResponse } from "cloudinary";
import { Response } from "express";

cloudinary.config({ 
  //fahad0arab
  cloud_name: 'drmz5eqh7', 
  api_key: '332722471545928', 
  api_secret: 'peOGH2kHZ9ocSJZZY4Epio4SmsU',

});


interface UploadOptions {
  folder: string;
  public_id: string;
  overwrite?: boolean;
}

 export const commonUploadOptions: UploadOptions = {
  folder: "food/food-server/images",
  public_id: "food",
  overwrite: true,
};

export const handleCloudinaryUpload = async (
  options: UploadOptions,
  fileBuffer: Buffer,
  res: Response
): Promise<string | null> => {
  try {
    // Generate a unique public_id using Date.now()
    const uniquePublicId = `${options.public_id}-${Date.now()}`;

    // Set the unique public_id in the options
    const uniqueOptions = { ...options, public_id: uniquePublicId };
    console.log("uniqueOptions", uniqueOptions);
    

    const result: UploadApiResponse = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        uniqueOptions, // Use unique options
        (error: any, result: any) => {
          if (error) {
            console.error("Error uploading image to Cloudinary:", error);
            res.status(500).json({ error: "Internal server error" });
            reject(error);
          } else {
            resolve(result);
          }
        }
      );

      uploadStream.end(fileBuffer);
    });

    return result.secure_url;
  } catch (error) {
    console.error("Error uploading image to Cloudinary:", error);
    res.status(500).json({ error: "Internal server error" });
    return null;
  }
};
