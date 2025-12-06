const conf = {
    appwriteurl: String(import.meta.env.VITE_APPWRITE_ENDPOINT_API),
    appwriteprojectid: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwritedatabaseid: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwritecollecionid: String(import.meta.env.VITE_APPWRITE_DATABQSE_TABLE_ID),
    appwritebucketid: String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}
export default conf