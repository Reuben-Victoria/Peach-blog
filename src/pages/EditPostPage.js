import React from 'react';
import EditPost from 'container/editPost/EditPost';
import PageLayout from 'layouts/PageLayout';

function EditPostPage() {
  return (
    <PageLayout toggle>
      <EditPost />
    </PageLayout>
  );
}

export default EditPostPage;
