import { Construct } from 'constructs';
import { App, TerraformStack, TerraformBackend, S3Backend } from 'cdktf';
import { AwsProvider } from '@cdktf/provider-aws';

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    new AwsProvider(this, 'AWS', {
      region: 'us-east-1',
    });

    // Define your resources here
  }
}

const app = new App();
const stack = new MyStack(app, 'my-stack');

new S3Backend(stack, {
  bucket: 'sltftestbucket',
  key: 'terraform.tfstate',
  region: 'us-west-2'
});

app.synth();
