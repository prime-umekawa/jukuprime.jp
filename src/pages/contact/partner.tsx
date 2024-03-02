import { NextPage } from 'next';

import Layout from '@/components/common/Layout';
import Container from '@/components/common/parts/Container';
import PartnerContactForm from '@/components/contact/PartnerContactForm';
import { Routes } from '@/lib/data/routes';

const ContactPage: NextPage = () => {
  return (
    <Layout path={Routes.CONTACT_PARTNER.url} title={Routes.CONTACT_PARTNER.title}>
      <div className="min-h-[calc(100vh-224px)] bg-[url('/util/graph_paper.png')] py-20">
        <Container maxWidth="max-w-3xl">
          <h1 className="text-center text-2xl font-bold sm:text-3xl">
            {Routes.CONTACT_PARTNER.title}
          </h1>

          <p className="mt-20">
            『素材ヘブン』の販売パートナーをご希望の方は、以下のフォームよりお申し込みください。後ほど担当者よりメールにてご連絡を差し上げます。
          </p>

          <div className="mt-10">
            <PartnerContactForm />
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default ContactPage;
