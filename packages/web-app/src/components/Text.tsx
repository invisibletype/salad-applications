import React, { ReactNode } from 'react'
import withStyles, { WithStyles } from 'react-jss'
import { SaladTheme } from '../SaladTheme'

const styles = (theme: SaladTheme) => ({})

interface Props extends WithStyles<typeof styles> {
  className?: string
  children?: ReactNode
}

// Define the component using these styles and pass it the 'classes' prop.
// Use this to assign scoped class names.
const _Text = ({ className, classes, children }: Props) => <div className={className}>{children}</div>

const Text = withStyles(styles)(_Text)

interface TextProps {
  className?: string
  children?: ReactNode
}

export const AppCondensedHeader = ({ ...props }: TextProps) => <Text {...props} />
