import React, { CSSProperties } from "react";
import { Card, Grid, Header, Icon, SemanticICONS } from "semantic-ui-react";

import "./InfoCard.scss";

export enum colors {
  red = "#B03060",
  orange = "#FE9A76",
  yellow = "#FFD700",
  olive = "#32CD32",
  green = "#016936",
  teal = "#008080",
  blue = "#0E6EB8",
  violet = "#EE82EE",
  purple = "#B413EC",
  pink = "#FF1493",
  brown = "#A52A2A",
  grey = "#A0A0A0",
  black = "#000000",
}

interface IInfoCardProps {
  title: string;
  value: string;
  unit: string;
  color: colors;
  iconName: SemanticICONS;
}

const InfoCard = ({ iconName, color, title, value, unit }: IInfoCardProps) => {
  const colorStyle: CSSProperties = {
    background: `${color}`,
  };

  return (
    <Card className="info-card">
      <Grid>
        <Grid.Row columns="2">
          <Grid.Column>
            <Header style={colorStyle} icon content="Learn More">
              <Icon name={iconName} />
              {title}
            </Header>
          </Grid.Column>
          <Grid.Column textAlign="center" verticalAlign="middle">
            <Header as="h1" className="inline-header">
              {value} <Header.Subheader>{unit}</Header.Subheader>
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Card>
  );
};

export default InfoCard;
