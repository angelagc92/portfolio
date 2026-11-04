const certificates = [
  {
    title: "Certificate title",
    issuer: "Course provider or institution",
    detail: "Add the year · Add the topic",
    mark: "01",
  },
  {
    title: "Certificate title",
    issuer: "Course provider or institution",
    detail: "Add the year · Add the topic",
    mark: "02",
  },
  {
    title: "Certificate title",
    issuer: "Course provider or institution",
    detail: "Add the year · Add the topic",
    mark: "03",
  },
];

export default function Certificates() {
  return (
    <section className="section container" id="certificates">
      <div className="section-heading">
        <div>
          <span className="eyebrow">CERTIFICATES</span>
          <h2>Building <span className="text-gradient">knowledge</span></h2>
        </div>
        <p className="section-intro">
          Formal certifications tracking my academic progress, technical skills, and language proficiency.
        </p>
      </div>

      <div className="certificate-grid">
        {certificates.map((certificate) => (
          <article className="panel certificate-card" key={certificate.mark}>
            <div className="certificate-top">
              <span className="certificate-mark">{certificate.mark}</span>
              <span className="certificate-icon">↗</span>
            </div>
            <div>
              <h3>{certificate.title}</h3>
              <p className="certificate-issuer">{certificate.issuer}</p>
              <p className="muted certificate-detail">{certificate.detail}</p>
            </div>
            {/* Add a certificate URL to this card when you have one. */}
          </article>
        ))}
      </div>
    </section>
  );
}
