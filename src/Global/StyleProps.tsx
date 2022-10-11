export interface StyleProps {
  is_active?: boolean;
  width?: string;
  height?: string;
  max_width?:string;
  min_height?:string;
  min_width?:string;
  max_height?:string;
  text_color?: string;
  bg_color?: string;
  corner_radius?: string;
  cursor?: string;
  box_shadow?: string;
  display?: string;
  scroll?:string;

  // Borders
  border?: string;
  border_top?: string;
  border_left?: string;
  border_right?: string;
  border_bottom?: string;


  // Margin
  margin?: string;
  margin_top?: string;
  margin_right?: string;
  margin_bottom?: string;
  margin_left?: string;
  vertical_align?:string;

  // Padding
  padding?: string;
  padding_top?: string;
  padding_right?: string;
  padding_bottom?: string;
  padding_left?: string;

  // Text Formatting
  font_family?: string;
  font_style?: string;
  font_weight?: string;
  font_size?: string;
  text_align?: string;
  line_height?: string;


  align_items?:string
  justify_content?:string
  gap?: string;
}
