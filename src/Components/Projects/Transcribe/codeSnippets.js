

export const ffmpegSnippet = `import { execFile } from "child_process";
import { access, constants, unlink } from 'node:fs/promises';
import path from "path";
const os = require('os');

export default class ffmpeg {
    executable: string;

    constructor() {
        switch (os.platform()) {
            case 'darwin':
                if (process.env.NODE_ENV === 'production') {
                    this.executable = path.join(
                        __dirname,
                        '..', '..', '..',  '..', 
                        'ffmpeg', 'bin', 'ffmpeg');
                } else {
                    this.executable = path.join('.', 'ffmpeg', 'bin', 'ffmpeg');
                }
                break;
            case 'win32':
                this.executable = path.join('.', 'ffmpeg', 'bin', 'ffmpeg.exe');
                break;
            default:
                throw Error(\`Unsupported OS: \${os.platform()}\`);
        }
    }

    convert = (file: string) => {
        return new Promise((resolve, reject) => {
            const ext = path.extname(file);
            access(this.executable, constants.X_OK)
                .then(() => console.log('Found ffmpeg'))
                .catch(err => {
                    console.error('Could not find ffmpeg executable', err);
                    console.error('Expected ffmeg at', this.executable)
                    reject('Could not find ffmpeg');
                    return;
                });
            const newFile = file.replace(ext, '.wav');
            access(newFile, constants.R_OK)
                .then(async () => await unlink(newFile))
                .catch(err => null)
                .finally(() => {
                    execFile(this.executable, ['-i', file, newFile], (err, stdout, stderr) => {
                        if (!!err) {
                            console.log('ERROR:', err);
                            reject(err);
                        } else {
                            resolve(newFile);
                        }
                    });
                });
        });
    };
}`


export const awsBaseClass = `/**
* Base class which is extended by each client class
*/
export default class BaseAwsClient {
   client: any;

   /**
    * Send a command to an AWS client and return the response
    * @param cmd - The command to send using the aws client.
    * @returns response
    */
   send = async (cmd: any) => {
       const response = await this.client.send(cmd)
       return response
   }

   /**
    * Builds the configuration for the client
    * @returns configuration
    */
   getConfig = () => {
       const settingsStr = localStorage.getItem(settingsKey)
       if (!settingsStr) {
           throw Error('Could not load settings string')
       }
       const settings: AppSettingsIF = JSON.parse(settingsStr)
       const config = {
           region: settings.region,
           credentials: {
               accessKeyId: settings.keys.accessKeyId,
               secretAccessKey: settings.keys.secretAccessKey
           }
       }
       return config
   }
}`

export const FileIF = `export interface JobIF {
    name: string,
    files: string[]
}

export interface FileIF {
    filepath: string
    status: AllowedFileStates
    convertedFilepath: string | null
    s3Path: string | null
    s3transcript: string | null
    transcriptText: string | null
}`

export const cloudformationYaml = `AWSTemplateFormatVersion: '2010-09-09'
Parameters:
  BucketName:
    Type: String
    Description: Enter a unique name for the S3 bucket

Resources:
  TranscribeUser:
    Type: AWS::IAM::User
    Properties:
      ManagedPolicyArns:
        - arn:aws:iam::aws:policy/AmazonS3FullAccess
        - arn:aws:iam::aws:policy/AmazonTranscribeFullAccess

  TranscribeBucket:
    Type: AWS::S3::Bucket
    Properties:
      BucketName: !Ref BucketName
      AccessControl: Private
      CorsConfiguration:
        CorsRules:
          - AllowedOrigins:
              - "*"
            AllowedMethods:
              - GET
              - PUT
              - POST
              - DELETE
            AllowedHeaders:
              - "*"
            MaxAge: 3000`