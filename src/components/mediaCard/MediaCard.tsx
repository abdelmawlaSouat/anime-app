import { Chip, Typography } from "@mui/material";
import Image from "next/image";
import { FC, Fragment } from "react";
import { MediaOverview } from "../../types/MediaOverview";
import styles from "./MediaCard.module.scss";

export interface MediaCardProps {
  media: MediaOverview;
}

export const MediaCard: FC<MediaCardProps> = ({ media }) => {
  const episodesCount =
    media.format !== "MOVIE" ? `${media.episodes} Episodes -` : "";

  return (
    <div className={styles.cardWrapper}>
      <Image
        src={media.coverImage.large}
        alt={`${media.title} - ${media.startDate}`}
        width="200"
        height="286"
      />

      <div className={styles.cardContentWrapper}>
        <div className={styles.cardContent}>
          <Typography gutterBottom variant="h5" component="h5">
            {media.title.romaji}
          </Typography>

          <Typography variant="body2" color="text.secondary" component="span">
            {`${episodesCount} ${media.startDate.year} - ${media.format} - ${media.type}`}
          </Typography>

          <Typography
            variant="caption"
            color="text.secondary"
            component="p"
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: media.description }}
          />

          <div className={styles.genresList}>
            {media.genres.slice(0, 3).map((genre) => (
              <Fragment key={genre}>
                <Chip
                  label={genre}
                  color="info"
                  variant="outlined"
                  size="small"
                />
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
