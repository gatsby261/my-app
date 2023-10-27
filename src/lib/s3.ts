import AWS from 'aws-sdk'
import { useParams } from 'next/navigation'

export async function uploadToS3 (file: File) {
  try {
    AWS.config.update({
      accessKeyId: process.env.NEXT_PUBLIC_S3_ACCESS_KEY_ID,
      secretAccessKey: process.env.NEXT_PUBLIC_S3_SECRET_ACCESS_KEY
    })

    const s3 = new AWS.S3({
      params: {
        Bucket: process.env.NEXT_PUBLIC_S3_BUCKET_NAME
      },
      region: 'us-east-1'
    })

    const params = {
        Bucket: process.env.NEXT_PUBLIC_S3_BUCKET_NAME,
        Key: file.name,
        Body: file
    }
  } catch (error) {}
}
