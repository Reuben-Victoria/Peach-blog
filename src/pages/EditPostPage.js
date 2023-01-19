import React from 'react';
import EditPost from '../Container/EditPost/EditPost';
import PageLayout from '../Layouts/PageLayout';

function EditPostPage() {
  return (
    <PageLayout toggle>
      <EditPost />
    </PageLayout>
  );
}

export default EditPostPage;
