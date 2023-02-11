import React from "react";
import "../styles/style.css";

function AboutText() {
  return (
    <div>
      <div class="container-fluid mt-5 py-5">
        <div class="d-flex flex-column justify-content-center px-5">
          <h2>Our vision</h2>
          <p style={{ color: "black" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique,
            optio. Amet illum animi accusantium vero, dolor minima qui cum
            veritatis, modi sapiente deserunt ex, velit sit tempora voluptas est
            recusandae iusto. Maxime, officiis aut magnam, earum sunt
            necessitatibus eveniet eaque odit illum autem dolores delectus
            ducimus voluptatem, impedit consequuntur rem commodi error soluta
            totam odio beatae laboriosam non veniam. Nihil ipsa tempore commodi
            alias aut architecto, fugit rerum repudiandae quos, adipisci autem
            repellat aspernatur, deserunt accusamus temporibus! Officiis amet
            nam temporibus assumenda tempore! Corporis obcaecati dolor nesciunt
            sequi laudantium dignissimos magni, doloremque tenetur nobis nemo
            consectetur aliquam temporibus natus autem perspiciatis reiciendis
            illum maxime error voluptas rem. Est hic mollitia quam esse
            inventore provident accusamus unde. Veritatis alias deserunt aperiam
            explicabo distinctio quidem debitis, a itaque totam incidunt
            repellat, deleniti iure asperiores adipisci iusto nihil nobis dolor.
            Rem, temporibus quae eveniet deleniti illo dolorum.
          </p>

          <div class="flex">
            <video width="320" height="240" controls>
              <source src={require("../image/my-video.mp4")} type="video/mp4" />
            </video>
            {/* <video style="margin: auto" width="320" height="240" controls>
              <source src={require("../image/my-video.mp4")} type="video/mp4" />
            </video> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutText;
