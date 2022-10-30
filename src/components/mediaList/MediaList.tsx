import { FC, Fragment } from "react";
import { MediaOverview } from "../../types/MediaOverview";
import { MediaCard } from "../mediaCard";
import styles from "./MediaList.module.scss";

export interface MediaListProps {
  list: MediaOverview[];
}

export const MediaList: FC<MediaListProps> = ({ list }) => {
  return (
    <div className={styles.wrapper}>
      <h2>Catalog</h2>

      <div className={styles.listWrapper}>
        {list.map((media) => (
          <Fragment key={media.id}>
            <MediaCard media={media} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};
