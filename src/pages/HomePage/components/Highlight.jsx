import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import HighlightCard from '../../../components/Cards/HighlightCard';
import TitleDivider from '../../../components/TitleDivider';
import { DiseaseColors } from '../../../constants';

function Highlight({ report }) {
  const { t } = useTranslation();
  const [dataCard, setDataCard] = useState([]);

  useEffect(() => {
    const data = [
      {
        title: t('total cases').toUpperCase(),
        number: report.cases,
        color: DiseaseColors.CASES,
      },
      {
        title: t('active').toUpperCase(),
        number: report.active,
        color: DiseaseColors.ACTIVE,
      },
      {
        title: t('recovered').toUpperCase(),
        number: report.recovered,
        color: DiseaseColors.RECOVERED,
      },
      {
        title: t('deaths').toUpperCase(),
        number: report.deaths,
        color: DiseaseColors.DEATHS,
      },
    ];

    setDataCard(data);
  }, [t, report]);

  return (
    <>
    <TitleDivider variant="left" text={t('title.highlightData')}/>
    <Grid container spacing={3}>
      {dataCard.map((field, idx) => (
        <Grid key={idx} item md={3} sm={6} xs={12}>
          <HighlightCard
            variant='horizontal'
            title={field.title}
            number={field.number}
            color={field.color}
          />
        </Grid>
      ))}
    </Grid>
    </>
  );
}

export default Highlight;
