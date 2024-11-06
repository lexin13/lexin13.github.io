import React, { Children } from 'react';
import type { Meta } from '@storybook/react';
import { Layout } from '../layout/Layout';
import { ThemeSwitcher } from './ThemeSwitcher';
import { ThemeProvider } from './ThemeProvider';

const meta: Meta<typeof ThemeSwitcher> = {
    title: 'Example/Common/ThemeSwitcher',
    component: ThemeSwitcher,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div style={{ marginTop: '3em' }}>
                <ThemeProvider>
                    <Story />
                </ThemeProvider>
            </div>
        ),
    ],
};

export default meta;

export const Sample = {
    args: {
    },
    render: ({ ...args }) =>
        <Layout>
            <div>
                <p>Lorem ipsum odor amet, consectetuer adipiscing elit.Pellentesque mollis habitant commodo ex curabitur suscipit nibh nisi rutrum.Facilisis purus id eget penatibus eros tortor velit dictum.Leo arcu imperdiet dolor platea mi duis.Magna hendrerit platea arcu, est fringilla id cubilia tincidunt vestibulum.Natoque aliquet consectetur faucibus fusce iaculis lacus efficitur accumsan.Sagittis nostra cursus massa sem ipsum velit pharetra.Quis tortor nascetur morbi inceptos lacus mattis libero vivamus.Cursus dapibus rutrum lectus maecenas maecenas odio.Arcu suspendisse posuere nascetur arcu posuere curabitur taciti metus.</p>
                <p>Viverra dictum fermentum suspendisse elementum arcu et imperdiet. Platea penatibus semper taciti vulputate neque lacinia. Laoreet nam turpis quisque massa molestie porttitor massa scelerisque porttitor? Consequat iaculis consectetur elit eget est. Aliquet cursus mollis nulla tincidunt aenean natoque. Mattis bibendum nulla cursus purus suscipit aptent justo mus. Diam commodo elit nec dis id; eleifend pellentesque magna.</p>
                <p>Feugiat pharetra ultrices efficitur ridiculus condimentum massa bibendum velit magna. Odio quis massa vel quis urna neque congue in. Arcu euismod posuere ligula habitant tincidunt quis. Condimentum arcu dis aliquam sodales urna eget platea tincidunt. Ridiculus habitasse ut enim fames bibendum luctus potenti ante lacus. Aliquet sem aenean taciti imperdiet at senectus aliquet. Vel orci maecenas vel metus ut felis; massa urna nec.</p>
            </div>
        </Layout >
};
