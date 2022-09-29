import styles from './Avatar.module.css'

type AvatarProps = {
  src: string
  hasBorder?: boolean
}

export const Avatar = ({ src, hasBorder = true }: AvatarProps) => (
  <img
    src={src}
    className={hasBorder ? styles.wrapperWithBorder : styles.wrapper}
  />
)
