/*
 * This file is part of the TYPO3 CMS project.
 *
 * It is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License, either version 2
 * of the License, or any later version.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 * The TYPO3 project - inspiring people to share!
 */
define(["require","exports","TYPO3/CMS/Backend/Enum/Severity","jquery","TYPO3/CMS/Backend/Modal"],function(e,t,n,a,o){"use strict";return new function(){a(function(){a(document).on("click",".t3js-filelist-delete",function(e){e.preventDefault();var t=a(e.currentTarget),r=t.data("redirectUrl");r=r?top.rawurlencode(r):top.rawurlencode(top.list_frame.document.location.pathname+top.list_frame.document.location.search);var i=t.data("identifier"),d=t.data("deleteType"),l=t.data("deleteUrl")+"&data[delete][0][data]="+encodeURIComponent(i)+"&data[delete][0][redirect]="+r;t.data("check")?o.confirm(t.data("title"),t.data("content"),n.SeverityEnum.warning,[{text:TYPO3.lang["buttons.confirm.delete_file.no"]||"Cancel",active:!0,btnClass:"btn-default",name:"no"},{text:TYPO3.lang["buttons.confirm."+d+".yes"]||"Yes, delete this file or folder",btnClass:"btn-warning",name:"yes"}]).on("button.clicked",function(e){var t=e.target.name;"no"===t?o.dismiss():"yes"===t&&(o.dismiss(),top.list_frame.location.href=l)}):top.list_frame.location.href=l})})}});