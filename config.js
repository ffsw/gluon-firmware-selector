/* * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

var config = {
  // list images on console that match no model
  listMissingImages: false,
  // see devices.js for different vendor model maps
  vendormodels: vendormodels,
  // set enabled categories of devices (see devices.js)
  enabled_device_categories: ["recommended"],
  // Display a checkbox that allows to display not recommended devices.
  // This only make sense if enabled_device_categories also contains not
  // recommended devices.
  recommended_toggle: true,
  // Optional link to an info page about no longer recommended devices
  recommended_info_link: null,
  // community prefix of the firmware images
  community_prefix: 'gluon-ffwsn-ffwsn-v',
  // firmware version regex
  version_regex: '-([0-9]{3})?[.-]',
  //version_regex: '-(v[0-9]{3})?[.-]',
  // relative image paths and branch
  directories: {
    // some demo sources
    '/fw/ffwsn/stable/factory/': 'stable',
    '/fw/ffwsn/stable/other/': 'stable',
    '/fw/ffwsn/stable/sysupgrade/': 'stable',
    '/fw/ffwsn/stable.pilot/factory/':'pilot',
    '/fw/ffwsn/stable.pilot/other/':'pilot',
    '/fw/ffwsn/stable.pilot/sysupgrade/':'pilot',
  },
  // page title
  title: 'Freifunk Weinstrasse Nord Firmware',
  // branch descriptions shown during selection
  branch_descriptions: {
    stable: 'Gut getestet, zuverlässig und stabil.',
    //beta: 'Vorabtests neuer Stable-Kandidaten.',
    pilot: 'Noch im Test.'
  },
  // recommended branch will be marked during selection
  recommended_branch: 'stable',
  // experimental branches (show a warning for these branches)
  experimental_branches: ['pilot'],
  // path to preview pictures directory
  preview_pictures: 'pictures/',
  // link to changelog
  changelog: 'https://freifunk-suedwest.de/firmware-versionen/'
};
