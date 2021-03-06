import React from 'react';
import { render } from 'test-utils';
import { Gif } from '.';

describe('<Gif />', () => {
  it('renders a figure with the expected css class', () => {
    const { getByTestId } = render(<Gif src="http://google.com" />);
    const el = getByTestId('gif-figure');

    expect(el.nodeName).toBe('FIGURE');
    expect(el).toHaveClass('gif-wrapper');
  });

  it('render inline string css', () => {
    const { getByTestId } = render(
      <Gif src="http://google.com" imgStyle="background-color: blue;" />,
    );

    const el = getByTestId('gif-figure');

    expect(el).toMatchInlineSnapshot(`
      .emotion-0 {
        margin: 0 auto;
        margin-bottom: 20px;
        background-color: blue;
      }

      <figure
        class="gif-wrapper emotion-0"
        data-testid="gif-figure"
      >
        <img
          data-testid="gif-image"
          src="http://google.com"
          style="margin: 0px; width: 100%;"
        />
      </figure>
    `);
  });

  it('renders an img element with given source', () => {
    const src = 'http://google.com/img.png';
    const { getByTestId } = render(<Gif src={src} />);
    const img = getByTestId('gif-image');

    expect(img).toHaveStyle({ margin: 0, width: '100%' });

    expect(img.nodeName).toBe('IMG');
    expect((img as HTMLImageElement).src).toBe(src);
  });

  it('does not render figcaption is not passed', () => {
    const { queryByTestId } = render(<Gif src="http://google.com" />);

    expect(queryByTestId('gif-figcaption')).not.toBeInTheDocument();
  });

  it('renders figure caption', () => {
    const caption = "hey I'm a caption";
    const { queryByTestId } = render(
      <Gif src="http://google.com" caption={caption} />,
    );

    const captionElement = queryByTestId('gif-figcaption');

    expect(captionElement).toBeInTheDocument();
    expect(captionElement).toHaveTextContent(caption);
  });
});
