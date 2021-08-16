import React from 'react';
import './chirimoya-list-section-stories.scss'

export default {
    title: 'Chirimoya/chirimoya-list-section',
};

export const ListSection = () => {
    return (
        <div className="chirimoya-list-section-container">
            <table
                style={{
                    width: '100%',
                    textAlign: 'left',
                    tableLayout: 'fixed',
                }}
            >
                <thead>
                    <tr>
                        <th className="first-column"></th>
                        <th className="column">
                            <h3>Regular</h3>
                        </th>
                        <th className="column">
                            <h3>Inset</h3>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <h3>Header & Footer</h3>
                        </td>

                        <td>
                            <div>
                                <chirimoya-list-section>
                                    <span slot="header">Section Header</span>
                                    <chirimoya-cell>
                                        <span slot="icon"><primaries-icon icon="PaperTowels" /></span>
                                        <span slot="title">Title</span>
                                        <span slot="subTitle">Subtitle</span>
                                        <span slot="value">Value</span>
                                    </chirimoya-cell>
                                    <chirimoya-cell>
                                        <span slot="icon"><primaries-icon icon="PaperTowels" /></span>
                                        <span slot="title">Title</span>
                                        <span slot="subTitle">Subtitle</span>
                                        <span slot="value">Value</span>
                                    </chirimoya-cell>
                                    <chirimoya-cell>
                                        <span slot="icon"><primaries-icon icon="PaperTowels" /></span>
                                        <span slot="title">Title</span>
                                        <span slot="subTitle">Subtitle</span>
                                        <span slot="value">Value</span>
                                    </chirimoya-cell>
                                    <chirimoya-cell>
                                        <span slot="icon"><primaries-icon icon="PaperTowels" /></span>
                                        <span slot="title">Title</span>
                                        <span slot="subTitle">Subtitle</span>
                                        <span slot="value">Value</span>
                                    </chirimoya-cell>
                                    <span slot="footer">The quick brown fox jumps over the lazy dog</span>
                                </chirimoya-list-section>
                            </div>
                        </td>
                        <td>
                            <div>
                                <chirimoya-list-section variant="inset">
                                    <div slot="header">Section Header</div>
                                    <chirimoya-cell>
                                        <span slot="icon"><primaries-icon icon="PaperTowels" /></span>
                                        <span slot="title">Title</span>
                                        <span slot="subTitle">Subtitle</span>
                                        <span slot="value">Value</span>
                                    </chirimoya-cell>
                                    <chirimoya-cell>
                                        <span slot="icon"><primaries-icon icon="PaperTowels" /></span>
                                        <span slot="title">Title</span>
                                        <span slot="subTitle">Subtitle</span>
                                        <span slot="value">Value</span>
                                    </chirimoya-cell>
                                    <chirimoya-cell>
                                        <span slot="icon"><primaries-icon icon="PaperTowels" /></span>
                                        <span slot="title">Title</span>
                                        <span slot="subTitle">Subtitle</span>
                                        <span slot="value">Value</span>
                                    </chirimoya-cell>
                                    <chirimoya-cell>
                                        <span slot="icon"><primaries-icon icon="PaperTowels" /></span>
                                        <span slot="title">Title</span>
                                        <span slot="subTitle">Subtitle</span>
                                        <span slot="value">Value</span>
                                    </chirimoya-cell>
                                    <div slot="footer">The quick brown fox jumps over the lazy dog</div>
                                </chirimoya-list-section>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>
                            <h3>Footer Only</h3>
                        </td>
                        <td>
                            <div>
                                <chirimoya-list-section>
                                    <chirimoya-cell>
                                        <span slot="icon"><primaries-icon icon="PaperTowels" /></span>
                                        <span slot="title">Title</span>
                                        <span slot="subTitle">Subtitle</span>
                                        <span slot="value">Value</span>
                                    </chirimoya-cell>
                                    <chirimoya-cell>
                                        <span slot="icon"><primaries-icon icon="PaperTowels" /></span>
                                        <span slot="title">Title</span>
                                        <span slot="subTitle">Subtitle</span>
                                        <span slot="value">Value</span>
                                    </chirimoya-cell>
                                    <chirimoya-cell>
                                        <span slot="icon"><primaries-icon icon="PaperTowels" /></span>
                                        <span slot="title">Title</span>
                                        <span slot="subTitle">Subtitle</span>
                                        <span slot="value">Value</span>
                                    </chirimoya-cell>
                                    <chirimoya-cell>
                                        <span slot="icon"><primaries-icon icon="PaperTowels" /></span>
                                        <span slot="title">Title</span>
                                        <span slot="subTitle">Subtitle</span>
                                        <span slot="value">Value</span>
                                    </chirimoya-cell>
                                    <span slot="footer">The quick brown fox jumps over the lazy dog</span>
                                </chirimoya-list-section>
                            </div>
                        </td>
                        <td>
                            <div>
                                <chirimoya-list-section variant="inset">
                                    <chirimoya-cell>
                                        <span slot="icon"><primaries-icon icon="PaperTowels" /></span>
                                        <span slot="title">Title</span>
                                        <span slot="subTitle">Subtitle</span>
                                        <span slot="value">Value</span>
                                    </chirimoya-cell>
                                    <chirimoya-cell>
                                        <span slot="icon"><primaries-icon icon="PaperTowels" /></span>
                                        <span slot="title">Title</span>
                                        <span slot="subTitle">Subtitle</span>
                                        <span slot="value">Value</span>
                                    </chirimoya-cell>
                                    <chirimoya-cell>
                                        <span slot="icon"><primaries-icon icon="PaperTowels" /></span>
                                        <span slot="title">Title</span>
                                        <span slot="subTitle">Subtitle</span>
                                        <span slot="value">Value</span>
                                    </chirimoya-cell>
                                    <chirimoya-cell>
                                        <span slot="icon"><primaries-icon icon="PaperTowels" /></span>
                                        <span slot="title">Title</span>
                                        <span slot="subTitle">Subtitle</span>
                                        <span slot="value">Value</span>
                                    </chirimoya-cell>
                                    <span slot="footer">The quick brown fox jumps over the lazy dog</span>
                                </chirimoya-list-section>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>
                            <h3>Header Only</h3>
                        </td>
                        <td>
                            <div>
                                <chirimoya-list-section>
                                    <span slot="header">Section Header</span>
                                    <chirimoya-cell>
                                        <span slot="icon"><primaries-icon icon="PaperTowels" /></span>
                                        <span slot="title">Title</span>
                                        <span slot="subTitle">Subtitle</span>
                                        <span slot="value">Value</span>
                                    </chirimoya-cell>
                                    <chirimoya-cell>
                                        <span slot="icon"><primaries-icon icon="PaperTowels" /></span>
                                        <span slot="title">Title</span>
                                        <span slot="subTitle">Subtitle</span>
                                        <span slot="value">Value</span>
                                    </chirimoya-cell>
                                    <chirimoya-cell>
                                        <span slot="icon"><primaries-icon icon="PaperTowels" /></span>
                                        <span slot="title">Title</span>
                                        <span slot="subTitle">Subtitle</span>
                                        <span slot="value">Value</span>
                                    </chirimoya-cell>
                                    <chirimoya-cell>
                                        <span slot="icon"><primaries-icon icon="PaperTowels" /></span>
                                        <span slot="title">Title</span>
                                        <span slot="subTitle">Subtitle</span>
                                        <span slot="value">Value</span>
                                    </chirimoya-cell>
                                </chirimoya-list-section>
                            </div>
                        </td>
                        <td>
                            <div>
                                <chirimoya-list-section variant="inset">
                                    <span slot="header">Section Header</span>
                                    <chirimoya-cell>
                                        <span slot="icon"><primaries-icon icon="PaperTowels" /></span>
                                        <span slot="title">Title</span>
                                        <span slot="subTitle">Subtitle</span>
                                        <span slot="value">Value</span>
                                    </chirimoya-cell>
                                    <chirimoya-cell>
                                        <span slot="icon"><primaries-icon icon="PaperTowels" /></span>
                                        <span slot="title">Title</span>
                                        <span slot="subTitle">Subtitle</span>
                                        <span slot="value">Value</span>
                                    </chirimoya-cell>
                                    <chirimoya-cell>
                                        <span slot="icon"><primaries-icon icon="PaperTowels" /></span>
                                        <span slot="title">Title</span>
                                        <span slot="subTitle">Subtitle</span>
                                        <span slot="value">Value</span>
                                    </chirimoya-cell>
                                    <chirimoya-cell>
                                        <span slot="icon"><primaries-icon icon="PaperTowels" /></span>
                                        <span slot="title">Title</span>
                                        <span slot="subTitle">Subtitle</span>
                                        <span slot="value">Value</span>
                                    </chirimoya-cell>
                                </chirimoya-list-section>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>
                            <h3>No header or footer</h3>
                        </td>
                        <td>
                            <div>
                                <chirimoya-list-section>
                                    <chirimoya-cell>
                                        <span slot="icon"><primaries-icon icon="PaperTowels" /></span>
                                        <span slot="title">Title</span>
                                        <span slot="subTitle">Subtitle</span>
                                        <span slot="value">Value</span>
                                    </chirimoya-cell>
                                    <chirimoya-cell>
                                        <span slot="icon"><primaries-icon icon="PaperTowels" /></span>
                                        <span slot="title">Title</span>
                                        <span slot="subTitle">Subtitle</span>
                                        <span slot="value">Value</span>
                                    </chirimoya-cell>
                                    <chirimoya-cell>
                                        <span slot="icon"><primaries-icon icon="PaperTowels" /></span>
                                        <span slot="title">Title</span>
                                        <span slot="subTitle">Subtitle</span>
                                        <span slot="value">Value</span>
                                    </chirimoya-cell>
                                    <chirimoya-cell>
                                        <span slot="icon"><primaries-icon icon="PaperTowels" /></span>
                                        <span slot="title">Title</span>
                                        <span slot="subTitle">Subtitle</span>
                                        <span slot="value">Value</span>
                                    </chirimoya-cell>
                                </chirimoya-list-section>
                            </div>
                        </td>
                        <td>
                            <div>
                                <chirimoya-list-section variant="inset">
                                    <chirimoya-cell>
                                        <span slot="icon"><primaries-icon icon="PaperTowels" /></span>
                                        <span slot="title">Title</span>
                                        <span slot="subTitle">Subtitle</span>
                                        <span slot="value">Value</span>
                                    </chirimoya-cell>
                                    <chirimoya-cell>
                                        <span slot="icon"><primaries-icon icon="PaperTowels" /></span>
                                        <span slot="title">Title</span>
                                        <span slot="subTitle">Subtitle</span>
                                        <span slot="value">Value</span>
                                    </chirimoya-cell>
                                    <chirimoya-cell>
                                        <span slot="icon"><primaries-icon icon="PaperTowels" /></span>
                                        <span slot="title">Title</span>
                                        <span slot="subTitle">Subtitle</span>
                                        <span slot="value">Value</span>
                                    </chirimoya-cell>
                                    <chirimoya-cell>
                                        <span slot="icon"><primaries-icon icon="PaperTowels" /></span>
                                        <span slot="title">Title</span>
                                        <span slot="subTitle">Subtitle</span>
                                        <span slot="value">Value</span>
                                    </chirimoya-cell>
                                </chirimoya-list-section>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div >
    );
};
