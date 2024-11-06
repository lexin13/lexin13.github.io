import React, { useContext } from 'react';
import type { Meta } from '@storybook/react';
import { Layout } from '../layout/Layout';
import { LanguageSwitcher } from './LanguageSwitcher';
import { LanguageProvider, useLanguageContext } from './LanguageProvider';

const meta: Meta<typeof LanguageSwitcher> = {
    title: 'Example/Common/LanguageSwitcher',
    component: LanguageSwitcher,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div style={{ marginTop: '3em' }}>
                <LanguageProvider>
                    <Story />
                </LanguageProvider>
            </div>
        ),
    ],
};

export default meta;

export const Sample = {
    args: {
    },
    render: ({ ...args }) => {
        const { language, toggleLanguage, translations } = useLanguageContext();
        const t = translations[language];
        return (
            <Layout>
                <div>
                    <p>{t.lorem1}</p>
                    <p>{t.lorem2}</p>
                    <p>{t.lorem3}</p>
                </div>
            </Layout >);
    }
};
