import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "./contatos.css";
library.add(fab);

export default function Contatos() {
  return (
    <div className="cubo">
      <div>
        <FontAwesomeIcon className="grid" icon={["fab", "discord"]} size="3x" />
      </div>
      <div>
        <FontAwesomeIcon className="grid" icon={["fab", "twitter"]} size="3x" />
      </div>
      <div>
        <FontAwesomeIcon
          className="grid"
          icon={["fab", "instagram"]}
          size="3x"
        />
      </div>
      <div>
        <FontAwesomeIcon
          className="grid"
          icon={["fab", "facebook"]}
          size="3x"
        />
      </div>
    </div>
  );
}
