document.addEventListener("DOMContentLoaded", initNavigationTree);


async function initNavigationTree() {
    const rootPath = 'Storage/';
    const container = document.getElementById("nav-tree");
    const fileList = generateFileList(rootPath);
    console.log("File structure:", fileList);
    const fileTree = buildFileHierarchy(fileList);
    console.log("File tree:", fileTree);
    const detailsHTML = createDetailsHTML(fileTree);
    console.log("Details HTML:", detailsHTML);

    if (container) {
        container.innerHTML = detailsHTML;
    }
}

function generateFileList(rootPath) {
    const fileTreeSession = JSON.parse(sessionStorage.getItem("fileHirarchy") || "[]");
    let fileStructure = [];
    for (let i = 0; i < fileTreeSession.length; i++) {
        let filePath = fileTreeSession[i];
        if (filePath.startsWith(rootPath)) {
            filePath = filePath.replace("Storage/", "");
            fileStructure.push(filePath);
        }
    }
    return fileStructure;
}

function buildFileHierarchy(paths) {
    const tree = {};

    for (const path of paths) {
        const parts = path.split('/');
        let current = tree;

        for (let i = 0; i < parts.length; i++) {
            const part = parts[i];

            // If it's the last part (a file)
            if (i === parts.length - 1) {
                if (!Array.isArray(current)) {
                    // If current is an object (i.e., a folder), we turn it into an array with the file
                    current[part] = current[part] || [];
                    current[part].push(part); // shouldn't happen normally
                } else {
                    current.push(part);
                }
            } else {
                // Intermediate directory
                const dir = part;
                const next = parts[i + 1];

                // If the next part is a file, we push it directly
                if (i === parts.length - 2) {
                    if (!current[dir]) current[dir] = [];
                    current[dir].push(next);
                    break;
                } else {
                    // If next is another directory, we ensure an object exists in the array
                    if (!current[dir]) current[dir] = [];
                    let obj = current[dir].find(v => typeof v === 'object');
                    if (!obj) {
                        obj = {};
                        current[dir].push(obj);
                    }
                    current = obj;
                }
            }
        }
    }

    return tree;
}

function createDetailsHTML(tree, depth = 1, currentPath = '', rootPath = 'Storage/') {
    function recurse(node, depth, currentPath) {
        let html = '';

        for (const key in node) {
            const items = node[key];
            let inner = '';

            for (const item of items) {
                if (typeof item === 'string') {
                    let itemNoMD = item.replace(/\.md$/, '');
                    let itemHTML = itemNoMD + '.html';

                    const fullPath = rootPath + currentPath + key + '/' + itemHTML;
                    inner += `<a href="${fullPath}" class="depth${depth + 1}">${itemNoMD}</a>\n`;
                } else if (typeof item === 'object') {
                    inner += recurse(item, depth + 1, currentPath + key + '/');
                }
            }

            html += `
  <details class="depth${depth}">
    <summary>${key}</summary>
    ${inner}
  </details>\n`;
        }

        return html;
    }

    return recurse(tree, depth, currentPath);
}
