import React from 'react';

export default {
  title: 'Chirimoya/chirimoya-navigation-item',
};

export const Bordered = () => {
  return (
    <div
      style={{
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      }}
    >
      <table
        style={{
          width: '100%',
          maxWidth: '640px',
          textAlign: 'left',
          tableLayout: 'fixed',
        }}
      >
        <thead>
          <tr>
            <th></th>
            <th>
              <h3>Default</h3>
            </th>
            <th>
              <h3>Selected</h3>
            </th>
          </tr>
        </thead>
        {/* Bordered, Enabled */}
        <tbody>
          <tr>
            <td colSpan={3}>
              <h3>Bordered, Enabled</h3>
            </td>
          </tr>
          <tr>
            <td>Normal Role</td>
            <td colspan="3">
              <chirimoya-navigation-item>Label</chirimoya-navigation-item>
            </td>
            <td>
              <chirimoya-navigation-item isSelected>Label</chirimoya-navigation-item>
            </td>
          </tr>
          <tr>
            <td>Primary Role</td>
            <td>
              <chirimoya-navigation-item navRole="primary">Label</chirimoya-navigation-item>
            </td>
            <td>
              <chirimoya-navigation-item navRole="primary" isSelected>
                Label
              </chirimoya-navigation-item>
            </td>
          </tr>
        </tbody>
        {/* Bordered, Disabled */}
        <tbody>
          <tr>
            <td colSpan={3}>
              <h3>Bordered, Disabled</h3>
            </td>
          </tr>
          <tr>
            <td>Normal Role</td>
            <td>
              <chirimoya-navigation-item isDisabled>Label</chirimoya-navigation-item>
            </td>
            <td>
              <chirimoya-navigation-item isSelected isDisabled>
                Label
              </chirimoya-navigation-item>
            </td>
          </tr>
          <tr>
            <td>Primary Role</td>
            <td>
              <chirimoya-navigation-item navRole="primary" isDisabled>
                Label
              </chirimoya-navigation-item>
            </td>
            <td>
              <chirimoya-navigation-item navRole="primary" isSelected isDisabled>
                Label
              </chirimoya-navigation-item>
            </td>
          </tr>
        </tbody>
        {/* Label, Enabled */}
        <tbody>
          <tr>
            <td colSpan={3}>
              <h3>Label, Enabled</h3>
            </td>
          </tr>
          <tr>
            <td>Normal Role</td>
            <td>
              <chirimoya-navigation-item variant="label">
                <primaries-icon slot="leading" icon="PaperTowels" />
                Label
              </chirimoya-navigation-item>
            </td>
            <td>
              <chirimoya-navigation-item variant="label" isSelected>
                <primaries-icon slot="leading" icon="PaperTowels" />
                Label
              </chirimoya-navigation-item>
            </td>
          </tr>
          <tr>
            <td>Primary Role</td>
            <td>
              <chirimoya-navigation-item variant="label" navRole="primary">
                <primaries-icon slot="leading" icon="PaperTowels" />
                Label
              </chirimoya-navigation-item>
            </td>
            <td>
              <chirimoya-navigation-item variant="label" navRole="primary" isSelected>
                <primaries-icon slot="leading" icon="PaperTowels" />
                Label
              </chirimoya-navigation-item>
            </td>
          </tr>
        </tbody>
        {/* Label, Disabled */}
        <tbody>
          <tr>
            <td colSpan={3}>
              <h3>Label, Disabled</h3>
            </td>
          </tr>
          <tr>
            <td>Normal Role</td>
            <td>
              <chirimoya-navigation-item variant="label" isDisabled>
                <primaries-icon slot="leading" icon="PaperTowels" />
                Label
              </chirimoya-navigation-item>
            </td>
            <td>
              <chirimoya-navigation-item variant="label" isSelected isDisabled>
                <primaries-icon slot="leading" icon="PaperTowels" />
                Label
              </chirimoya-navigation-item>
            </td>
          </tr>
          <tr>
            <td>Primary Role</td>
            <td>
              <chirimoya-navigation-item variant="label" navRole="primary" isDisabled>
                <primaries-icon slot="leading" icon="PaperTowels" />
                Label
              </chirimoya-navigation-item>
            </td>
            <td>
              <chirimoya-navigation-item variant="label" navRole="primary" isSelected isDisabled>
                <primaries-icon slot="leading" icon="PaperTowels" />
                Label
              </chirimoya-navigation-item>
            </td>
          </tr>
        </tbody>
        {/* Inline, Enabled */}
        <tbody>
          <tr>
            <td colSpan={3}>
              <h3>Inline, Enabled</h3>
            </td>
          </tr>
          <tr>
            <td>Normal Role</td>
            <td>
              <chirimoya-navigation-item variant="inline">
                <primaries-icon slot="leading" icon="PaperTowels" />
                Label
              </chirimoya-navigation-item>
            </td>
            <td>
              <chirimoya-navigation-item variant="inline" isSelected>
                <primaries-icon slot="leading" icon="PaperTowels" />
                Label
              </chirimoya-navigation-item>
            </td>
          </tr>
          <tr>
            <td>Primary Role</td>
            <td>
              <chirimoya-navigation-item variant="inline" navRole="primary">
                <primaries-icon slot="leading" icon="PaperTowels" />
                Label
              </chirimoya-navigation-item>
            </td>
            <td>
              <chirimoya-navigation-item variant="inline" navRole="primary" isSelected>
                <primaries-icon slot="leading" icon="PaperTowels" />
                Label
              </chirimoya-navigation-item>
            </td>
          </tr>
        </tbody>
        {/* Inline, Disabled */}
        <tbody>
          <tr>
            <td colSpan={3}>
              <h3>Inline, Disabled</h3>
            </td>
          </tr>
          <tr>
            <td>Normal Role</td>
            <td>
              <chirimoya-navigation-item variant="inline" isDisabled>
                <primaries-icon slot="leading" icon="PaperTowels" />
                Label
              </chirimoya-navigation-item>
            </td>
            <td>
              <chirimoya-navigation-item variant="inline" isSelected isDisabled>
                <primaries-icon slot="leading" icon="PaperTowels" />
                Label
              </chirimoya-navigation-item>
            </td>
          </tr>
          <tr>
            <td>Primary Role</td>
            <td>
              <chirimoya-navigation-item variant="inline" navRole="primary" isDisabled>
                <primaries-icon slot="leading" icon="PaperTowels" />
                Label
              </chirimoya-navigation-item>
            </td>
            <td>
              <chirimoya-navigation-item variant="inline" navRole="primary" isSelected isDisabled>
                <primaries-icon slot="leading" icon="PaperTowels" />
                Label
              </chirimoya-navigation-item>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
