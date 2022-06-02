exports.component = (name) => `
import React from "react";

export interface ${name.charAt(0).toUpperCase() + name.slice(1)}Interface{};

const ${name} = (props: ${
  name.charAt(0).toUpperCase() + name.slice(1)
}Interface) => {
  const {} = props;
  return (
    <div data-testid="${name}">
${name}
  </div>
  )
};

export default ${name};
`;

exports.story = (name) => `
import React from "react";
import ${name}, { ${name}Interface } from "./${name}";
export default {
  title: "${name}",
  component: ${name},
};
export const Default = (args: ${name}Interface) => <${name} {...args} />;
`;

exports.test = (name) => `
import React from 'react';
import { render } from '@testing-library/react';
import ${name} from './${name}';
describe('${name} Component', () => {
  test('it should match the snapshot', () => {
    const { asFragment } = render(<${name} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
`;

// index.ts
exports.barrel = (name) => `
export {default} from './${name}'
`;
