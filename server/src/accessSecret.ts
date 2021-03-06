import { SecretManagerServiceClient } from "@google-cloud/secret-manager";

export const accessSecret = async () => {
    const client = new SecretManagerServiceClient();
    const projectID = process.env.GCP_PROJECT_ID;
    const secret_name = process.env.GCP_SECRET_NAME;
    const name = `projects/${projectID}/secrets/${secret_name}/versions/1`;
    const [version] = await client.accessSecretVersion({
        name: name,
    });
    const data = version.payload.data.toString();
    return JSON.parse(data);
};
