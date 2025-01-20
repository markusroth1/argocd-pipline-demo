# OpenShift Application Deployment with Ansible

## Overview

This repository contains an Ansible playbook and the source code for deploying a sample application on OpenShift using Source-to-Image (S2I). The playbook automates the entire process, from creating an OpenShift project to building and deploying the application and exposing it via a route.

## Features

- Automates the creation of an OpenShift project (namespace).
- Builds the application from a Git repository using OpenShift's Source-to-Image (S2I) strategy.
- Deploys the application with a `DeploymentConfig`.
- Exposes the application via a publicly accessible route.
- Fully customizable for other applications or configurations.

## Repository Structure
```bash
.
├── ansible                # Main Ansible playbook for OpenShift deployment 
│   ├── next
│   └── vars
├── app                     
│    ├── backend            # Source code of the backend application
│    │   └── node_modules
│    └── frontend
│        ├── node_modules
│        ├── public
│        └── src            # Source code of the frontend application
└── README.md               # This file
```
## Prerequisites

1. **OpenShift Cluster**: Ensure you have access to an OpenShift cluster.
2. **Ansible Installed**: Install Ansible with the `community.kubernetes` collection:
   ```bash
   ansible-galaxy collection install community.kubernetes

3. OpenShift CLI (oc): Optionally, verify you can access the cluster using the oc CLI.
4. API Token: Obtain an API token for authenticating with the OpenShift cluster.

## Usage
1. Clone the Repository
2. 
```bash
git clone <repository-url>
cd <repository-directory>
```
2. Customize Variables

Edit the ansible/playbook.yml file and update the following placeholders:

    <openshift-api-url>: Your OpenShift API URL.
    <git-repository-url>: URL of your Git repository containing the application source code.
    <webhook-secret>: Secret for GitHub webhook (optional).
    Adjust other parameters like project name, image stream, or ports as needed.

3. Run the Playbook

Run the Ansible playbook to deploy the application:
```bash
ansible-playbook -i ansible/inventory ansible/playbook.yml
```
4. Access the Application

After the deployment, the playbook will display the application's route. Open it in your browser:

Application deployed at: http://<your-app-route>

Customization

    Application Code: Replace the code in the app/ directory with your application.
    S2I Image: Change the base image (nodejs:14) in the playbook for a different runtime.
    Scalability: Adjust the number of replicas in the DeploymentConfig.

Troubleshooting

    Check the OpenShift events in the project for issues:

    oc get events -n my-app-project

    Ensure the OpenShift API URL and token are correct.
    Verify network connectivity to the OpenShift cluster.

License

This repository is licensed under the MIT License.
