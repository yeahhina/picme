import "./Contact.css";
function Contact() {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <p>You can reach me at:</p>

      <ul>
        <li>
          Gmail:{" "}
          <a href="mailto:yeahhinaproductions@gmail.com">yeahhinaproductions</a>
        </li>
        <li>
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/yeasmin-m-6b9719214/">
            linkedin.com/in/yeasmin_m
          </a>
        </li>
        <li>
          GitHub:{" "}
          <a href="https://github.com/yeahhina?tab=overview&from=2025-04-01&to=2025-04-30">
            github.com/yeahhina
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
