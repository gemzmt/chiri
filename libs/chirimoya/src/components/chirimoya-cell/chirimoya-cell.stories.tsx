import React from 'react';
import { Story, Meta } from '@storybook/react';

const iconsSelect = {
  chevronRight: 'ChevronRight',
  archery: 'Archery',
  emoji: 'Emoji',
  checkmark: 'Checkmark',
  Downward: 'Downward',
  No: 'No',
  ArrowRight: 'ArrowRight',
  AstronomySunCross: 'AstronomySunCross',
  Orbit:'Orbit'
}

export default {
  title: 'Chirimoya/chirimoya-cell',
  argTypes: {
    trailing: {
      name:'Trailing icon variant',
      options: Object.keys(iconsSelect),
      mapping: iconsSelect,
      control: { type: 'select' },
      table:{ disable:true }
    },
    leading: {
      name:'Leading icon variant',
      options: Object.keys(iconsSelect),
      mapping: iconsSelect,
      control: { type: 'select' },
      table:{ disable:true }
    },

  }
} as Meta;

const TitleSubtitleValueStory: Story<any> = ({selected, leading, trailing}) => {
  return (
    <div>
      <h3>With Trailing Icon</h3>
      <div style={{ display: "flex" }}>
        <div style={{ width: "375px" }}>
          <p>
            No Leading
          </p>
          <div>
            <chirimoya-cell selected={selected}>
              <span slot="title">Title</span>
              <span slot="subtitle">Subtitle</span>
              <span slot="value">Value</span>
              <primaries-icon slot="trailing" icon={trailing} />
            </chirimoya-cell>
          </div>
          <br />
          <div>
            <chirimoya-cell selected={selected}>
              <span slot="title">Title</span>
              <span slot="subtitle">Subtitle</span>
              <span slot="value">Value</span>
              <input slot="switch" type="checkbox" defaultChecked />
              <primaries-icon slot="trailing" icon={trailing} />
            </chirimoya-cell>
          </div>
          <br/>
          <div>
            <chirimoya-cell selected={selected}>
              <span slot="title">Title</span>
              <span slot="subtitle">Subtitle</span>
              <span slot="value">Value</span>
              <input slot="switch" type="checkbox" />
              <primaries-icon slot="trailing" icon={trailing} />
            </chirimoya-cell>
          </div>
        </div>
        <div style={{ width: "375px" }}>
          <p>
            Leading Icon
          </p>
          <div>
            <chirimoya-cell selected={selected}>
              <span slot="leading"><primaries-icon icon={leading} /></span>
              <span slot="title">Title</span>
              <span slot="subtitle">Subtitle</span>
              <span slot="value">Value</span>
              <primaries-icon slot="trailing" icon={trailing} />
            </chirimoya-cell>
          </div>
          <br />
          <div>
            <chirimoya-cell selected={selected}>
              <span slot="leading"><primaries-icon icon={leading} /></span>
              <span slot="title">Title</span>
              <span slot="subtitle">Subtitle</span>
              <span slot="value">Value</span>
              <input slot="switch" type="checkbox" defaultChecked />
              <primaries-icon slot="trailing" icon={trailing} />
            </chirimoya-cell>
          </div>
          <br/>
          <div>
            <chirimoya-cell selected={selected}>
              <span slot="leading"><primaries-icon icon={leading} /></span>
              <span slot="title">Title</span>
              <span slot="subtitle">Subtitle</span>
              <span slot="value">Value</span>
              <input slot="switch" type="checkbox" />
              <primaries-icon slot="trailing" icon={trailing} />
            </chirimoya-cell>
          </div>
        </div>
        <div style={{ width: "375px" }}>
          <p>
            Leading Thumbnail
          </p>
          <chirimoya-cell selected={selected}>
            <img src="https://myoctocat.com/assets/images/octocats/octocat-25.png" slot="thumbnail" />
            <span slot="title">Title</span>
            <span slot="subtitle">Subtitle</span>
            <span slot="value">Value</span>
            <primaries-icon slot="trailing" icon={trailing} />
          </chirimoya-cell>
          <chirimoya-cell selected={selected}>
            <img src="https://myoctocat.com/assets/images/octocats/octocat-25.png" slot="thumbnail" />
            <span slot="title">Title</span>
            <span slot="subtitle">Subtitle</span>
            <span slot="value">Value</span>
            <input slot="switch" type="checkbox" defaultChecked />
            <primaries-icon slot="trailing" icon={trailing} />
          </chirimoya-cell>
          <chirimoya-cell selected={selected}>
            <img src="https://myoctocat.com/assets/images/octocats/octocat-25.png" slot="thumbnail" />
            <span slot="title">Title</span>
            <span slot="subtitle">Subtitle</span>
            <span slot="value">Value</span>
            <input slot="switch" type="checkbox" />
            <primaries-icon slot="trailing" icon={trailing} />
          </chirimoya-cell>
        </div>
      </div>
      <h3>Without Trailing Icon</h3>
      <div style={{ display: "flex" }}>
        <div style={{ width: "375px" }}>
          <p>
            No Leading
          </p>
          <div>
            <chirimoya-cell>
              <span slot="title">Title</span>
              <span slot="subtitle">Subtitle</span>
              <span slot="value">Value</span>
            </chirimoya-cell>
          </div>
          <br />
          <div>
            <chirimoya-cell>
              <span slot="title">Title</span>
              <span slot="subtitle">Subtitle</span>
              <span slot="value">Value</span>
              <input slot="switch" type="checkbox" defaultChecked />
            </chirimoya-cell>
          </div>
          <br/>
          <div>
            <chirimoya-cell>
              <span slot="title">Title</span>
              <span slot="subtitle">Subtitle</span>
              <span slot="value">Value</span>
              <input slot="switch" type="checkbox" />
            </chirimoya-cell>
          </div>
        </div>
        <div style={{ width: "375px" }}>
          <p>
            Leading Icon
          </p>
          <div>
            <chirimoya-cell>
              <span slot="leading"><primaries-icon icon="Emoji" /></span>
              <span slot="title">Title</span>
              <span slot="subtitle">Subtitle</span>
              <span slot="value">Value</span>
            </chirimoya-cell>
          </div>
          <br />
          <div>
            <chirimoya-cell>
              <span slot="leading"><primaries-icon icon="Emoji" /></span>
              <span slot="title">Title</span>
              <span slot="subtitle">Subtitle</span>
              <span slot="value">Value</span>
              <input slot="switch" type="checkbox" defaultChecked />
            </chirimoya-cell>
          </div>
          <br/>
          <div>
            <chirimoya-cell>
              <span slot="leading"><primaries-icon icon="Emoji" /></span>
              <span slot="title">Title</span>
              <span slot="subtitle">Subtitle</span>
              <span slot="value">Value</span>
              <input slot="switch" type="checkbox" />
            </chirimoya-cell>
          </div>
        </div>
        <div style={{ width: "375px" }}>
          <p>
            Leading Thumbnail
          </p>
          <chirimoya-cell>
            <img src="https://myoctocat.com/assets/images/octocats/octocat-25.png" slot="thumbnail" />
            <span slot="title">Title</span>
            <span slot="subtitle">Subtitle</span>
            <span slot="value">Value</span>
          </chirimoya-cell>
          <chirimoya-cell>
            <img src="https://myoctocat.com/assets/images/octocats/octocat-25.png" slot="thumbnail" />
            <span slot="title">Title</span>
            <span slot="subtitle">Subtitle</span>
            <span slot="value">Value</span>
            <input slot="switch" type="checkbox" defaultChecked />
          </chirimoya-cell>
          <chirimoya-cell>
            <img src="https://myoctocat.com/assets/images/octocats/octocat-25.png" slot="thumbnail" />
            <span slot="title">Title</span>
            <span slot="subtitle">Subtitle</span>
            <span slot="value">Value</span>
            <input slot="switch" type="checkbox" />
          </chirimoya-cell>
        </div>
      </div>
    </div>
  );
};
export const TitleSubtitleValue = TitleSubtitleValueStory.bind({});
TitleSubtitleValue.args = {
  Selected: false,
  trailing: 'chevronRight',
  leading: 'emoji'
}
TitleSubtitleValue.argTypes={
  trailing: { table: { disable: false } },
  leading: { table: { disable: false } }
}

export const TitleSubtitle = () => {
  return (
    <div>
      <h3>With Trailing Icon</h3>
      <div style={{ display: "flex" }}>
        <div style={{ width: "375px" }}>
          <p>
            No Leading
          </p>
          <div>
            <chirimoya-cell>
              <span slot="title">Title</span>
              <span slot="subtitle">Subtitle</span>
              <primaries-icon slot="trailing" icon="ChevronRight" />
            </chirimoya-cell>
          </div>
          <br />
          <div>
            <chirimoya-cell >
              <span slot="title">Title</span>
              <span slot="subtitle">Subtitle</span>
              <input slot="switch" type="checkbox" defaultChecked />
              <primaries-icon slot="trailing" icon="ChevronRight" />
            </chirimoya-cell>
          </div>
          <br/>
          <div>
            <chirimoya-cell >
              <span slot="title">Title</span>
              <span slot="subtitle">Subtitle</span>
              <input slot="switch" type="checkbox" />
              <primaries-icon slot="trailing" icon="ChevronRight" />
            </chirimoya-cell>
          </div>
        </div>
        <div style={{ width: "375px" }}>
          <p>
            Leading Icon
          </p>
          <div>
            <chirimoya-cell>
              <span slot="leading"><primaries-icon icon="Emoji" /></span>
              <span slot="title">Title</span>
              <span slot="subtitle">Subtitle</span>
              <primaries-icon slot="trailing" icon="ChevronRight" />
            </chirimoya-cell>
          </div>
          <br />
          <div>
            <chirimoya-cell >
              <span slot="leading"><primaries-icon icon="Emoji" /></span>
              <span slot="title">Title</span>
              <span slot="subtitle">Subtitle</span>
              <input slot="switch" type="checkbox" defaultChecked />
              <primaries-icon slot="trailing" icon="ChevronRight" />
            </chirimoya-cell>
          </div>
          <br/>
          <div>
            <chirimoya-cell >
              <span slot="leading"><primaries-icon icon="Emoji" /></span>
              <span slot="title">Title</span>
              <span slot="subtitle">Subtitle</span>
              <input slot="switch" type="checkbox" />
              <primaries-icon slot="trailing" icon="ChevronRight" />
            </chirimoya-cell>
          </div>
        </div>
        <div style={{ width: "375px" }}>
          <p>
            Leading Thumbnail
          </p>
          <chirimoya-cell>
            <img src="https://myoctocat.com/assets/images/octocats/octocat-25.png" slot="thumbnail" />
            <span slot="title">Title</span>
            <span slot="subtitle">Subtitle</span>
            <primaries-icon slot="trailing" icon="ChevronRight" />
          </chirimoya-cell>
          <chirimoya-cell >
            <img src="https://myoctocat.com/assets/images/octocats/octocat-25.png" slot="thumbnail" />
            <span slot="title">Title</span>
            <span slot="subtitle">Subtitle</span>
            <input slot="switch" type="checkbox" defaultChecked />
            <primaries-icon slot="trailing" icon="ChevronRight" />
          </chirimoya-cell>
          <chirimoya-cell >
            <img src="https://myoctocat.com/assets/images/octocats/octocat-25.png" slot="thumbnail" />
            <span slot="title">Title</span>
            <span slot="subtitle">Subtitle</span>
            <input slot="switch" type="checkbox" />
            <primaries-icon slot="trailing" icon="ChevronRight" />
          </chirimoya-cell>
        </div>
      </div>
      <h3>Without Trailing Icon</h3>
      <div style={{ display: "flex" }}>
        <div style={{ width: "375px" }}>
          <p>
            No Leading
          </p>
          <div>
            <chirimoya-cell>
              <span slot="title">Title</span>
              <span slot="subtitle">Subtitle</span>
            </chirimoya-cell>
          </div>
          <br />
          <div>
            <chirimoya-cell>
              <span slot="title">Title</span>
              <span slot="subtitle">Subtitle</span>
              <input slot="switch" type="checkbox" defaultChecked />
            </chirimoya-cell>
          </div>
          <br/>
          <div>
            <chirimoya-cell>
              <span slot="title">Title</span>
              <span slot="subtitle">Subtitle</span>
              <input slot="switch" type="checkbox" />
            </chirimoya-cell>
          </div>
        </div>
        <div style={{ width: "375px" }}>
          <p>
            Leading Icon
          </p>
          <div>
            <chirimoya-cell>
              <span slot="leading"><primaries-icon icon="Emoji" /></span>
              <span slot="title">Title</span>
              <span slot="subtitle">Subtitle</span>
            </chirimoya-cell>
          </div>
          <br />
          <div>
            <chirimoya-cell>
              <span slot="leading"><primaries-icon icon="Emoji" /></span>
              <span slot="title">Title</span>
              <span slot="subtitle">Subtitle</span>
              <input slot="switch" type="checkbox" defaultChecked />
            </chirimoya-cell>
          </div>
          <br/>
          <div>
            <chirimoya-cell>
              <span slot="leading"><primaries-icon icon="Emoji" /></span>
              <span slot="title">Title</span>
              <span slot="subtitle">Subtitle</span>
              <input slot="switch" type="checkbox" />
            </chirimoya-cell>
          </div>
        </div>
        <div style={{ width: "375px" }}>
          <p>
            Leading Thumbnail
          </p>
          <chirimoya-cell>
            <img src="https://myoctocat.com/assets/images/octocats/octocat-25.png" slot="thumbnail" />
            <span slot="title">Title</span>
            <span slot="subtitle">Subtitle</span>
          </chirimoya-cell>
          <chirimoya-cell>
            <img src="https://myoctocat.com/assets/images/octocats/octocat-25.png" slot="thumbnail" />
            <span slot="title">Title</span>
            <span slot="subtitle">Subtitle</span>
            <input slot="switch" type="checkbox" defaultChecked />
          </chirimoya-cell>
          <chirimoya-cell>
            <img src="https://myoctocat.com/assets/images/octocats/octocat-25.png" slot="thumbnail" />
            <span slot="title">Title</span>
            <span slot="subtitle">Subtitle</span>
            <input slot="switch" type="checkbox" />
          </chirimoya-cell>
        </div>
      </div>
    </div>
  );
};

export const TitleValue = () => {
  return (
    <div>
      <h3>With Trailing Icon</h3>
      <div style={{ display: "flex" }}>
        <div style={{ width: "375px" }}>
          <p>
            No Leading
          </p>
          <div>
            <chirimoya-cell>
              <span slot="title">Title</span>
              <span slot="value">Value</span>
              <primaries-icon slot="trailing" icon="ChevronRight" />
            </chirimoya-cell>
          </div>
          <br />
          <div>
            <chirimoya-cell >
              <span slot="title">Title</span>
              <span slot="value">Value</span>
              <input slot="switch" type="checkbox" defaultChecked />
              <primaries-icon slot="trailing" icon="ChevronRight" />
            </chirimoya-cell>
          </div>
          <br/>
          <div>
            <chirimoya-cell >
              <span slot="title">Title</span>
              <span slot="value">Value</span>
              <input slot="switch" type="checkbox" />
              <primaries-icon slot="trailing" icon="ChevronRight" />
            </chirimoya-cell>
          </div>
        </div>
        <div style={{ width: "375px" }}>
          <p>
            Leading Icon
          </p>
          <div>
            <chirimoya-cell>
              <span slot="leading"><primaries-icon icon="Emoji" /></span>
              <span slot="title">Title</span>
              <span slot="value">Value</span>
              <primaries-icon slot="trailing" icon="ChevronRight" />
            </chirimoya-cell>
          </div>
          <br />
          <div>
            <chirimoya-cell >
              <span slot="leading"><primaries-icon icon="Emoji" /></span>
              <span slot="title">Title</span>
              <span slot="value">Value</span>
              <input slot="switch" type="checkbox" defaultChecked />
              <primaries-icon slot="trailing" icon="ChevronRight" />
            </chirimoya-cell>
          </div>
          <br/>
          <div>
            <chirimoya-cell >
              <span slot="leading"><primaries-icon icon="Emoji" /></span>
              <span slot="title">Title</span>
              <span slot="value">Value</span>
              <input slot="switch" type="checkbox" />
              <primaries-icon slot="trailing" icon="ChevronRight" />
            </chirimoya-cell>
          </div>
        </div>
        <div style={{ width: "375px" }}>
          <p>
            Leading Thumbnail
          </p>
          <chirimoya-cell>
            <img src="https://myoctocat.com/assets/images/octocats/octocat-25.png" slot="thumbnail" />
            <span slot="title">Title</span>
            <span slot="value">Value</span>
            <primaries-icon slot="trailing" icon="ChevronRight" />
          </chirimoya-cell>
          <chirimoya-cell >
            <img src="https://myoctocat.com/assets/images/octocats/octocat-25.png" slot="thumbnail" />
            <span slot="title">Title</span>
            <span slot="value">Value</span>
            <input slot="switch" type="checkbox" defaultChecked />
            <primaries-icon slot="trailing" icon="ChevronRight" />
         </chirimoya-cell>
          <chirimoya-cell >
            <img src="https://myoctocat.com/assets/images/octocats/octocat-25.png" slot="thumbnail" />
            <span slot="title">Title</span>
            <span slot="value">Value</span>
            <input slot="switch" type="checkbox" />
            <primaries-icon slot="trailing" icon="ChevronRight" />
          </chirimoya-cell>
        </div>
      </div>
      <h3>Without Trailing Icon</h3>
      <div style={{ display: "flex" }}>
        <div style={{ width: "375px" }}>
          <p>
            No Leading
          </p>
          <div>
            <chirimoya-cell>
              <span slot="title">Title</span>
              <span slot="value">Value</span>
            </chirimoya-cell>
          </div>
          <br />
          <div>
            <chirimoya-cell>
              <span slot="title">Title</span>
              <span slot="value">Value</span>
              <input slot="switch" type="checkbox" defaultChecked />
            </chirimoya-cell>
          </div>
          <br/>
          <div>
            <chirimoya-cell>
              <span slot="title">Title</span>
              <span slot="value">Value</span>
              <input slot="switch" type="checkbox" />
            </chirimoya-cell>
          </div>
        </div>
        <div style={{ width: "375px" }}>
          <p>
            Leading Icon
          </p>
          <div>
            <chirimoya-cell>
              <span slot="leading"><primaries-icon icon="Emoji" /></span>
              <span slot="title">Title</span>
              <span slot="value">Value</span>
            </chirimoya-cell>
          </div>
          <br />
          <div>
            <chirimoya-cell>
              <span slot="leading"><primaries-icon icon="Emoji" /></span>
              <span slot="title">Title</span>
              <span slot="value">Value</span>
            </chirimoya-cell>
          </div>
          <br/>
          <div>
            <chirimoya-cell>
              <span slot="leading"><primaries-icon icon="Emoji" /></span>
              <span slot="title">Title</span>
              <span slot="value">Value</span>
            </chirimoya-cell>
          </div>
        </div>
        <div style={{ width: "375px" }}>
          <p>
            Leading Thumbnail
          </p>
          <chirimoya-cell>
            <img src="https://myoctocat.com/assets/images/octocats/octocat-25.png" slot="thumbnail" />
            <span slot="title">Title</span>
            <span slot="value">Value</span>
          </chirimoya-cell>
          <chirimoya-cell>
            <img src="https://myoctocat.com/assets/images/octocats/octocat-25.png" slot="thumbnail" />
            <span slot="title">Title</span>
            <span slot="value">Value</span>
            <input slot="switch" type="checkbox" defaultChecked />
          </chirimoya-cell>
          <chirimoya-cell>
            <img src="https://myoctocat.com/assets/images/octocats/octocat-25.png" slot="thumbnail" />
            <span slot="title">Title</span>
            <span slot="value">Value</span>
            <input slot="switch" type="checkbox" />
          </chirimoya-cell>
        </div>
      </div>
    </div>
  );
};

export const Title = () => {
  return (
    <div>
      <h3>With Trailing Icon</h3>
      <div style={{ display: "flex" }}>
        <div style={{ width: "375px" }}>
          <p>
            No Leading
          </p>
          <div>
            <chirimoya-cell>
              <span slot="title">Title</span>
              <primaries-icon slot="trailing" icon="ChevronRight" />
            </chirimoya-cell>
          </div>
          <br />
          <div>
            <chirimoya-cell>
              <span slot="title">Title</span>
              <input slot="switch" type="checkbox" defaultChecked />
              <primaries-icon slot="trailing" icon="ChevronRight" />
            </chirimoya-cell>
          </div>
          <br/>
          <div>
            <chirimoya-cell>
              <span slot="title">Title</span>
              <input slot="switch" type="checkbox" />
              <primaries-icon slot="trailing" icon="ChevronRight" />
            </chirimoya-cell>
          </div>
        </div>
        <div style={{ width: "375px" }}>
          <p>
            Leading Icon
          </p>
          <div>
            <chirimoya-cell>
              <span slot="leading"><primaries-icon icon="Emoji" /></span>
              <span slot="title">Title</span>
              <primaries-icon slot="trailing" icon="ChevronRight" />
            </chirimoya-cell>
          </div>
          <br />
          <div>
            <chirimoya-cell >
              <span slot="leading"><primaries-icon icon="Emoji" /></span>
              <span slot="title">Title</span>
              <input slot="switch" type="checkbox" defaultChecked />
              <primaries-icon slot="trailing" icon="ChevronRight" />
            </chirimoya-cell>
          </div>
          <br/>
          <div>
            <chirimoya-cell >
              <span slot="leading"><primaries-icon icon="Emoji" /></span>
              <span slot="title">Title</span>
              <input slot="switch" type="checkbox" />
              <primaries-icon slot="trailing" icon="ChevronRight" />
            </chirimoya-cell>
          </div>
        </div>
        <div style={{ width: "375px" }}>
          <p>
            Leading Thumbnail
          </p>
          <chirimoya-cell>
            <img src="https://myoctocat.com/assets/images/octocats/octocat-25.png" slot="thumbnail" />
            <span slot="title">Title</span>
            <primaries-icon slot="trailing" icon="ChevronRight" />
          </chirimoya-cell>
          <chirimoya-cell >
            <img src="https://myoctocat.com/assets/images/octocats/octocat-25.png" slot="thumbnail" />
            <span slot="title">Title</span>
            <input slot="switch" type="checkbox" defaultChecked />
            <primaries-icon slot="trailing" icon="ChevronRight" />
          </chirimoya-cell>

          <chirimoya-cell >
            <img src="https://myoctocat.com/assets/images/octocats/octocat-25.png" slot="thumbnail" />
            <span slot="title">Title</span>
            <input slot="switch" type="checkbox" />
            <primaries-icon slot="trailing" icon="ChevronRight" />
          </chirimoya-cell>
        </div>
      </div>
      <h3>Without Trailing Icon</h3>
      <div style={{ display: "flex" }}>
        <div style={{ width: "375px" }}>
          <p>
            No Leading
          </p>
          <div>
            <chirimoya-cell>
              <span slot="title">Title</span>
            </chirimoya-cell>
          </div>
          <br />
          <div>
            <chirimoya-cell>
              <span slot="title">Title</span>
              <input slot="switch" type="checkbox" defaultChecked />
            </chirimoya-cell>
          </div>
          <br/>
          <div>
            <chirimoya-cell>
              <span slot="title">Title</span>
              <input slot="switch" type="checkbox" />
            </chirimoya-cell>
          </div>
        </div>
        <div style={{ width: "375px" }}>
          <p>
            Leading Icon
          </p>
          <div>
            <chirimoya-cell>
              <span slot="leading"><primaries-icon icon="Emoji" /></span>
              <span slot="title">Title</span>
            </chirimoya-cell>
          </div>
          <br />
          <div>
            <chirimoya-cell>
              <span slot="leading"><primaries-icon icon="Emoji" /></span>
              <span slot="title">Title</span>
              <input slot="switch" type="checkbox" defaultChecked />
            </chirimoya-cell>
          </div>
          <br/>
          <div>
            <chirimoya-cell>
              <span slot="leading"><primaries-icon icon="Emoji" /></span>
              <span slot="title">Title</span>
              <input slot="switch" type="checkbox" />
            </chirimoya-cell>
          </div>
        </div>
        <div style={{ width: "375px" }}>
          <p>
            Leading Thumbnail
          </p>
          <chirimoya-cell>
            <img src="https://myoctocat.com/assets/images/octocats/octocat-25.png" slot="thumbnail" />
            <span slot="title">Title</span>
          </chirimoya-cell>
          <chirimoya-cell>
            <img src="https://myoctocat.com/assets/images/octocats/octocat-25.png" slot="thumbnail" />
            <span slot="title">Title</span>
            <input slot="switch" type="checkbox" defaultChecked />
          </chirimoya-cell>
          <chirimoya-cell>
            <img src="https://myoctocat.com/assets/images/octocats/octocat-25.png" slot="thumbnail" />
            <span slot="title">Title</span>
            <input slot="switch" type="checkbox" />
          </chirimoya-cell>
        </div>
      </div>
    </div>
  );
};
